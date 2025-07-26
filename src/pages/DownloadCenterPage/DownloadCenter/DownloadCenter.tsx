import { useState, useEffect } from "react";
import "./DownloadCenter.css";
import { PDFDocument } from "pdf-lib";
import PuffLoader from "react-spinners/PuffLoader";
import {
  capitalize,
  getDownloadCenter,
  getRightContent,
  getVisibleSensorAnimation,
} from "../../../ts/util";
import CheckBoxList from "../../../components/CheckBoxList2/CheckBoxList2";
import {
  atLeastOneIsSelected,
  getLanguageFolder,
  getPdfName,
} from "../../../ts/pdfHandler";
import useAppStore from "../../../store";
import { useInView } from "react-intersection-observer";

const downloadCenterContent = getDownloadCenter();
const urlEndpoint = `./download-center`;

function DownloadCenter({ companyName = "Tanmiah" }) {
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  const [checkedChapters, setCheckedChapters] = useState(
    new Array(downloadCenterContent.chaptersDescription.length)
  );
  const [isLoading, setIsLoading] = useState(false);

  const { ref: descriptionRef, inView: isDescriptionVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
        if (i === 0 && j === 0) {
          // skip the cover
        } else if (checkedChapters[i][j]) {
          promisesPDFUrls.push(
            `${urlEndpoint}/${getLanguageFolder(rtlLanguage)}/${i + 1}/${getPdfName(i, j)}`
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
      chaptersPDF.map((pdf) => PDFDocument.load(pdf))
    );

    const pdfDoc = await PDFDocument.create();

    for (const doc of loadedDocuments) {
      const pages = await pdfDoc.copyPages(doc, doc.getPageIndices());
      pages.forEach((page) => pdfDoc.addPage(page));
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

  const handleDownloadAllChapters = async () => {
    setIsLoading(true);
    const currentLanguage = rtlLanguage ? "arabic" : "english";

    const promiseFetch = await fetch(
      `${urlEndpoint}/${currentLanguage}/${companyName.toLowerCase()}_${currentLanguage}.pdf`,
      {
        headers: {
          "Content-Type": "application/pdf",
          "Content-disposition": "attachment",
        },
      }
    ).then((res) => res.arrayBuffer());

    const completePdf = await PDFDocument.load(promiseFetch);
    const pdfDoc = await PDFDocument.create();

    const pages = await pdfDoc.copyPages(completePdf, completePdf.getPageIndices());
    pages.forEach((page) => pdfDoc.addPage(page));

    const finalPdf = await pdfDoc.save();
    const blob = new Blob([finalPdf], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    setIsLoading(false);

    const link = document.createElement("a");
    link.href = url;
    const capitalizedName = capitalize(companyName);
    link.download = rtlLanguage
      ? `${capitalizedName}_Full_Report_AR.pdf`
      : `${capitalizedName}_Full_Report_EN.pdf`;
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(link);

    resetCheckedChapters();
  };

  const handleOnChange = (checkedChapter: number, index: number) => {
    const copyCheckedChapters = [...checkedChapters];

    if (index === 0) {
      const allTrue = copyCheckedChapters[checkedChapter].every(Boolean);
      copyCheckedChapters[checkedChapter] = copyCheckedChapters[checkedChapter].map(() => !allTrue);
      return setCheckedChapters(copyCheckedChapters);
    }

const updated = copyCheckedChapters[checkedChapter].map((val: boolean, idx: number) =>
  idx === index ? !val : val
);

    // Check/uncheck "Select all"
    const allSelected = updated.slice(1).every(Boolean);
    updated[0] = allSelected;

    copyCheckedChapters[checkedChapter] = updated;
    setCheckedChapters(copyCheckedChapters);
  };

  return (
    <div className="download-center">
      <div className="download-center__controls-container">
        <p
          ref={descriptionRef}
          className="download-center__description body-l"
          style={getVisibleSensorAnimation(
            isDescriptionVisible,
            "fade-in-40px 1s ease-in-out backwards"
          )}
        >
          {getRightContent(rtlLanguage, downloadCenterContent.description)}
        </p>

        <div className="download-center__buttons font-size-16 body-m">
          <button
            className="download-center__button "
            onClick={handleDownloadSpecificChapters}
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
            onClick={handleDownloadAllChapters}
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
            <PuffLoader loading={isLoading} size={40} color={"#1fbec7"} />
          </div>
          <h5 className="download-message__title font-size-18 subtitle-s">
            {getRightContent(rtlLanguage, downloadCenterContent.messageToDownload)}
          </h5>
        </div>
      )}

      <div className="download-center__chapters-container">
        {downloadCenterContent.chaptersDescription.map((chapter, index) => (
          <div className="download-center__list" key={index}>
            <CheckBoxList
              list={chapter.sections}
              chapter={index}
              handleOnChange={handleOnChange}
              checkBoxList={checkedChapters[index]}
            />
          </div>
        ))}
      </div>

      <div className="general-separator"></div>
    </div>
  );
}

export default DownloadCenter;
