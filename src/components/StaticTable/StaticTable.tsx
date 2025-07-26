import { type ReactNode, useState } from "react";
import styles from "./StaticTable.module.css";

// import useAppStore from "../../store";
import { useInView } from "react-intersection-observer";
import { getVisibleSensorAnimation, setAdditionalClasses } from "../../ts/util";

interface Props {
  header: { label: string[] }[];
  preHeader?: { label: string[] }[];
  contentsRow: { data: string[] }[];
  title?: string;
  topTitle?: string;
  underTitle?: string;
  underTitle2?: string;
  coloredColumnsBackgrounds?: number[];
  customColoredColumnBackground?: string[];
  customHeaderColumnClassname?: string;
  customRowClasses?: string[];
  customTDClasses?: string[];
  customTHClasses?: string[];
  customCellClasses?: string[][],
  redBottomBorder?: boolean;
  firstColumnWider?: boolean;
  preBottomLegend?: string;
  bottomLegend?: string;
  bottomLegend2?: string;
  maxWidthColumn?: boolean;
  minWidthColumnIndexes?: number[];
  invertColumnAlign?: number[];
  coloredRowsBackground?: number[];
  hideHeader?: boolean;
  className?: string;
  fillEvenRowsBackground?: string;
  defaultMovingBackgroundHeaderColor?: string;
  colSpan?: number;
  customPreHeaderColSpan?: number;
  indexToApplycustomPreHeaderColSpan?: number;
  fixFirstColumn?: boolean;
  fixHeader?: boolean;
}

interface ContentData {
  total?: boolean;
  bold?: boolean;
  redBottomBorder?: boolean;
  indent?: boolean;
  percentage?: boolean;
  data: string[];
}

function StaticTable({
  header,
  preHeader,
  contentsRow,
  title,
  topTitle,
  underTitle,
  // underTitle2,
  coloredColumnsBackgrounds = [],
  customColoredColumnBackground = [],
  customHeaderColumnClassname = "",
   customCellClasses =[[]],
  customRowClasses = [],
  redBottomBorder = false,
  firstColumnWider = false,
  preBottomLegend,
  bottomLegend,
  bottomLegend2,
  maxWidthColumn,
  minWidthColumnIndexes = [],
  invertColumnAlign = [],
  coloredRowsBackground = [],
  hideHeader,
  className = "",
  fillEvenRowsBackground,
  defaultMovingBackgroundHeaderColor = " ",
  customTDClasses = [],
  customTHClasses = [],
  colSpan = 1,
  customPreHeaderColSpan = 1,
  indexToApplycustomPreHeaderColSpan = 100,
  fixFirstColumn = true,
  fixHeader = true,
}: Props) {
  console.log(redBottomBorder, defaultMovingBackgroundHeaderColor)
  const [clickedRow, setClickedRow] = useState<null | number>(null);
  // const rtlLanguage = useAppStore((state) => state.rtlLanguage);
  const { ref, inView: isVisible } = useInView();
  const { ref: refLegend, inView: isVisibleLegend } = useInView();
  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
      className={className}
    >
      <div className={styles.titlesWrapper}>
        {topTitle && (
          <h4
            style={getVisibleSensorAnimation(
              isVisible,
              "fade-in-40px 0.6s ease-in-out backwards"
            )}
            className={["h3", styles.textColor].join(" ")}
          >
            {topTitle}
          </h4>
        )}
        {title && (
          <h3
            className={[styles.titleColor, "subtitle-m"].join(" ")}
            style={getVisibleSensorAnimation(
              isVisible,
              `fade-in-40px 0.6s ${topTitle ? 0.2 : 0}s ease-in-out backwards`
            )}
          >
            {title}
          </h3>
        )}
        {underTitle && (
          <h4
            style={getVisibleSensorAnimation(
              isVisible,
              `fade-in-40px 0.6s ${
                topTitle && title ? 0.4 : 0.2
              }s ease-in-out backwards`
            )}
            className={["subtitle-m", styles.titleColor].join(" ")}
          >
            {underTitle}
          </h4>
        )}

        {/* {underTitle2 && (
              <h4
                style={getVisibleSensorAnimation(
                  isVisible,
                  `fade-in-40px 0.6s ${
                    topTitle && title ? 0.4 : 0.2
                  }s ease-in-out backwards`
                )}
                className={["Body-Large",styles.underTitleColor].join(' ')}
              >
                {underTitle2}
              </h4>
            )} */}
      </div>
      <div className="spacer-32"></div>
      <div
        className={[
          styles.tableWrapper,
          fixHeader ? styles.stickyHeader : "",
        ].join(" ")}
      >
        <table
          className={styles.staticTable}
          style={getVisibleSensorAnimation(
            isVisible,
            "fade-in-40px 1s backwards"
          )}
        >
          <thead className={[styles.staticTableHeader].join(" ")}>
            {/* <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                borderBottom:" ",
                backgroundColor: defaultMovingBackgroundHeaderColor,
                zIndex: -1,
                ...getVisibleSensorAnimation(
                  isVisible,
                  `${
                    rtlLanguage ? "width-increase-flipped" : "width-increase"
                  } 1s 0.4s backwards`
                ),
              }}
            ></div> */}
            {preHeader && (
              <tr className={["body-l","color-yellow"].join(" ")}>
                {preHeader.map(
                  (preHeaderItem, index) =>
                     (
                      <th
                        key={index}
                        colSpan={
                          index === indexToApplycustomPreHeaderColSpan
                            ? customPreHeaderColSpan
                            : 1
                        }
                        className={[
                          index === indexToApplycustomPreHeaderColSpan
                            ? styles.preHeader
                            : "",
                          fixFirstColumn && index === 0
                            ? `${styles.stickyCol} ${styles.firstCol} ${styles.firstColHeader}`
                            : " ",
                        ].join(" ")}
                      >
                        {preHeaderItem.label.map((line, indexLine) => (
                          <p key={indexLine}>{line}</p>
                        ))}
                      </th>
                    )
                )}
              </tr>
            )}
            {!hideHeader && (
              <tr
                className={[styles.staticTableRowHeading, "body-m"].join(" ")}
              >
                {header.map((headerItem, index) => (
                  <th
                    colSpan={index > 0 ? colSpan : 1}
                    key={index}
                    className={`static-table__column-heading ${setAdditionalClasses(
                      [
                        "static-table__first-column-heading",
                        "first-column-wider",
                        "max-width-column",
                        "min-width-column",
                        "column-invert-text-align",
                        customHeaderColumnClassname,
                        customTHClasses[index],
                        `${styles.stickyCol} ${styles.firstCol} ${styles.firstColHeader}`,
                        
                      ],
                      [
                        index === 0,
                        firstColumnWider && index === 0,
                        !!maxWidthColumn && index === 0,
                        minWidthColumnIndexes.includes(index),
                        invertColumnAlign.includes(index),
                        !!customHeaderColumnClassname,
                        !!customTHClasses[index],
                        fixFirstColumn && index === 0,
                      
                      ]
                    )}`}
                  >
                    {headerItem.label.map((line, lineIndex) => (
                      <p key={lineIndex} className={`m-0`}>
                        {line}
                      </p>
                    ))}
                  </th>
                ))}
              </tr>
            )}
          </thead>
          <tbody
            className={[styles.staticTableBody, "font-weight-400 body-m"].join(
              " "
            )}
          >
            {/* <div
              style={{
                position: "absolute",
                height: "1px",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: redBottomBorder
                  ? "transparent"
                  : "transparent",
                // zIndex: -1,
                ...getVisibleSensorAnimation(
                  isVisible,
                  `${
                    rtlLanguage ? "width-increase-flipped" : "width-increase"
                  } 1s 1s backwards`
                ),
              }}
            ></div> */}
            {contentsRow.map((content: ContentData, rowIndex) => (
              <tr
                className={`static-table__content-row${setAdditionalClasses(
                  [
                    "clicked-row",
                    "row-colored-background",
                    customRowClasses[rowIndex],
                    (rowIndex % 2 === 1 && fillEvenRowsBackground) || "",
                  ],
                  [
                   rowIndex === clickedRow,
                    coloredRowsBackground.includes(rowIndex),
                    !!(customRowClasses[rowIndex] || ""),
                    !!fillEvenRowsBackground,
                  ]
                )} ${styles.row}`}
                key={rowIndex}
                onClick={() =>
                  setClickedRow(rowIndex === clickedRow ? null : rowIndex)
                }
              >
                {content.data.map(
                  (contentData: string | string[] | ReactNode, colIndex) => (
                    <td
                      key={colIndex}
                      className={`static-table__content-data${setAdditionalClasses(
                        [
                          "static-table__first-column-content",
                          "bold",
                          "bold",
                          "red-accent-background",
                          "redBottomBorder",
                          "first-column-wider",
                          "max-width-column",
                          "min-width-column",
                          "column-indent",
                          "column-invert-text-align",
                          customColoredColumnBackground[colIndex],
                          customTDClasses[colIndex],
                          `${styles.stickyCol} ${styles.firstCol}`,
                          `${styles.secondCol}`,
                           customCellClasses?.[rowIndex]?.[colIndex] || "",
                        ],
                        [
                         colIndex === 0,
                          !!content.total,
                          !!content.bold,
                          coloredColumnsBackgrounds.includes(colIndex),
                          !!content.redBottomBorder,
                          firstColumnWider && colIndex === 0,
                          !!maxWidthColumn && colIndex === 0,
                          minWidthColumnIndexes.includes(colIndex),
                          !!content.indent && colIndex === 0,
                          invertColumnAlign.includes(colIndex),
                          !!customColoredColumnBackground[colIndex],
                          !!customTDClasses[colIndex],
                          fixFirstColumn && colIndex === 0,
                          fixFirstColumn && colIndex === 1,
                          !!customCellClasses?.[rowIndex]?.[colIndex]
                        ]
                      )}`}
                    >
                      {contentData}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div ref={refLegend}>
        {preBottomLegend && (
          <div
            className={`static-table__bottom-legend body-SS ${
              bottomLegend ? "mb-0 pb-0" : ""
            }`}
            style={getVisibleSensorAnimation(
              isVisibleLegend,
              `fade-in-20px 0.6s backwards`
            )}
          >
            {preBottomLegend}
          </div>
        )}
        {bottomLegend && (
          <div
            style={getVisibleSensorAnimation(
              isVisibleLegend,
              `fade-in-20px 0.6s 0.15s backwards`
            )}
            className={`static-table__bottom-legend body-SS  ${
              bottomLegend2 ? "mb-0" : ""
            } ${preBottomLegend ? "pt-0" : ""} ${bottomLegend2 ? "pb-0" : ""}`}
          >
            {bottomLegend}
          </div>
        )}
        {bottomLegend2 && (
          <div
            style={getVisibleSensorAnimation(
              isVisibleLegend,
              `fade-in-20px 0.6s 0.3s backwards`
            )}
            className="static-table__bottom-legend mt-0 pt-0 body-SS"
          >
            {bottomLegend2}
          </div>
        )}
      </div>
    </div>
  );
}

export default StaticTable;
