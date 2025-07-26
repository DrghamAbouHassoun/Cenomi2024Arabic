import { useState, useEffect } from "react";
import "./DownloadCenter.css";
import { PDFDocument } from "pdf-lib";
import PuffLoader from "react-spinners/PuffLoader";
import {
  capitalize,
  getDownloadCenter,
  getRightContent,
  getVisibleSensorAnimation,
} from "../../ts/util";
import useAppStore from "../../store";
import {
  atLeastOneIsSelected,
  getLanguageFolder,
  getPdfName,
} from "../../ts/pdfHandler";
import CheckBoxList2 from "../CheckBoxList2/CheckBoxList2";
import { useInView } from "react-intersection-observer";

const downloadCenterContent = getDownloadCenter();

const urlEndpoint = `./download-center`;

function DownloadCenter({ companyName = "Cenomi" }) {
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  const [checkedChapters, setCheckedChapters] = useState(
    new Array(downloadCenterContent.chaptersDescription.length)
  );
  const [isLoading, setIsLoading] = useState(false);

  const { ref: ref1, inView: inView1 } = useInView();

  useEffect(() => {
    resetCheckedChapters();
  }, []);
  const resetCheckedChapters = () => {
    const copyList = new Array(
      downloadCenterContent.chaptersDescription.length
    );
    for (let i = 0; i < downloadCenterContent.chaptersDescription.length; i++) {
      copyList[i] = new Array(
        downloadCenterContent.chaptersDescription[i].sections.length
      ).fill(false);
    }

    setCheckedChapters(copyList);
  };

  const handleDownloadSpecificChapters = async () => {
    const promisesPDFUrls = [];
    setIsLoading(true);

    for (let i = 0; i < checkedChapters.length; i++) {
      for (let j = 0; j < checkedChapters[i].length; j++) {
        // start from 1 to avoid the cover.pdf
        // if (i === 0 && j === 0) {
        //do nothing to avoid non cover chapter 1
        // } else
        if (checkedChapters[i][j]) {
          promisesPDFUrls.push(
            `${urlEndpoint}/${getLanguageFolder(rtlLanguage)}/${
              i + 1
            }/${getPdfName(i, j)}`
          );
        }
      }
    }

    const fetchPromises = promisesPDFUrls.map((url) =>
      fetch(url, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-disposition": "attachment",
        },
      }).then((res) => res.arrayBuffer())
    );
    const chaptersPDF = await Promise.all(fetchPromises);

    const loadedDocuments = await Promise.all(
      chaptersPDF.map((pdfToload) => PDFDocument.load(pdfToload))
    );

    const pdfDoc = await PDFDocument.create();

    for (const loadDocument of loadedDocuments) {
      const pages = await pdfDoc.copyPages(
        loadDocument,
        loadDocument.getPageIndices()
      );
      for (const page of pages) {
        pdfDoc.addPage(page);
      }
    }

    const finalPdf = await pdfDoc.save();
    const blob = new Blob([finalPdf], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    setIsLoading(false);

    const link = document.createElement("a");
    link.href = url;
    link.download = rtlLanguage
      ? `${companyName}_Partial_Report_AR.pdf`
      : `${companyName}_Partial_Report_EN.pdf`;
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(link);

    resetCheckedChapters();
  };

  const handleDownloadCatalog = () => {
    const currentLanguage = rtlLanguage ? "arabic" : "english";
    const capitalizedName = capitalize(companyName);
    const link = document.createElement("a");
    link.href = `${urlEndpoint}/${currentLanguage}/${companyName.toLowerCase()}_${currentLanguage}.pdf`;
    link.download = rtlLanguage
      ? `${capitalizedName}_Full_Report_AR.pdf`
      : `${capitalizedName}_Full_Report_EN.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOnChange = (checkedChapter: number, index: number) => {
    const copyCheckedChapters = [...checkedChapters];
    if (index === 0) {
      if (checkedChapters[checkedChapter][0]) {
        copyCheckedChapters[checkedChapter] = copyCheckedChapters[
          checkedChapter
        ].map(() => false);
        // return setCheckedItems(checkedItems.map(() => false));
      } else {
        copyCheckedChapters[checkedChapter] = copyCheckedChapters[
          checkedChapter
        ].map(() => true);
        // return setCheckedItems(checkedItems.map(() => true));
      }

      return setCheckedChapters(copyCheckedChapters);
    }
    const updatedCheckedItems = copyCheckedChapters[checkedChapter].map(
      (item: any, indexItem: number) => (index === indexItem ? !item : item)
    );

    // handle logic of first index check it or unckeck it
    if (updatedCheckedItems[0]) {
      // updatedCheckedItems[0] = false;
    } else {
      const oneNotChecked = updatedCheckedItems.some(
        (item: boolean, index: number) => index > 0 && !item
      );
      if (!oneNotChecked) {
        updatedCheckedItems[0] = true;
      }
    }
    copyCheckedChapters[checkedChapter] = updatedCheckedItems;
    setCheckedChapters(copyCheckedChapters);
  };

  return (
    <div className=" download-center ">
      {/* <div style={{ position: "absolute", top: "-50px" }}></div> */}
      {/* <VisibilitySensor partialVisibility>
        {({ isVisible }: VisibilityType) => (
          <h2 
            className="download-center__title primary-text-gradient font-size-48"
            style={getVisibleSensorAnimation(
              isVisible,
              "fade-in-40px 1s ease-in-out   backwards"
            )}
          >
            {getRightContent(rtlLanguage,downloadCenterContent.title)}
          </h2>
        )}
      </VisibilitySensor> */}
      <div className="download-center__controls-container" ref={ref1}>
        <p
          className="download-center__description body-l"
          style={getVisibleSensorAnimation(
            inView1,
            "fade-in-40px 1s ease-in-out backwards"
          )}
        >
          {getRightContent(rtlLanguage, downloadCenterContent.description)}
        </p>

        <div className="download-center__buttons font-size-16 body-m">
          <button
            className="download-center__button "
            onClick={async () => await handleDownloadSpecificChapters()}
            disabled={!atLeastOneIsSelected(checkedChapters)}
          >
            <div className="download-center__button-container">
              <span>
                {getRightContent(
                  rtlLanguage,
                  downloadCenterContent.buttonSpecificChaptersLabel
                )}
              </span>
            </div>
          </button>
          <button
            className="download-center__button"
            onClick={async () => handleDownloadCatalog()}
          >
            <div className="download-center__button-container">
              <span>
                {getRightContent(
                  rtlLanguage,
                  downloadCenterContent.buttonAllChaptersLabel
                )}
              </span>
            </div>
          </button>
        </div>
      </div>
      {isLoading && (
        <div className="download-message__container subtitle-s">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PuffLoader
              loading={isLoading}
              size={40}
              // css={override}
              // margin={1}
              // width={3}
              color={"#592B8A"}
            />
          </div>

          <h5 className="download-message__title font-size-18 subtitle-s">
            {getRightContent(
              rtlLanguage,
              downloadCenterContent.messageToDownload
            )}
          </h5>
        </div>
      )}
      <div className="download-center__chapters-container">
        {downloadCenterContent.chaptersDescription.map(
          (
            chapter: {mainTitle?: boolean, sections: { label:string[];  }[] },
            index
          ) => (
            <div
              className={[
                "download-center__list",
                chapter.sections.length > 1 || chapter.mainTitle
                  ? "titleSection"
                  : "",
              ].join(" ")}
            >
              <CheckBoxList2
                key={index}
                list={chapter.sections}
                chapter={index}
                handleOnChange={handleOnChange}
                checkBoxList={checkedChapters[index]}
                mainTitle={chapter.mainTitle}
              />
            </div>
          )
        )}
      </div>
      <div className="general-separator"></div>
    </div>
  );
}

export default DownloadCenter;
