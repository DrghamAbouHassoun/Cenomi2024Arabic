import { Cover } from "../../components/Cover/Cover";
import Paragraph from "../../components/Paragraph/Paragraph";
import StaticTable from "../../components/StaticTable/StaticTable";
import TabTable from "../../components/TabTable/TabTable";
import content from "../../content/content";
import useAppStore from "../../store";
import { getRightContent } from "../../ts/util";
import styles from "./FinancialStatements.module.css"

import coverImage from "./images/cover.jpg"

const pageContent = content.pages.FinancialStatements.content

export const FinancialStatements = () => {
  const rtlLanguage = useAppStore(s=>s.rtlLanguage);
  return (
    <div>
       <Cover image={coverImage} title={getRightContent(rtlLanguage, content.pages.FinancialStatements.title)} />
     <div className="container horizontal-padding">
         <div className="spacer-64"></div>
       <TabTable
          tabLabels={getRightContent(rtlLanguage, pageContent.tab.labels)}
          contents={[
            <> 
      
              <Paragraph fontClassName="h3" classNames="bold color-aubergine-1000">
                {getRightContent(
                  rtlLanguage,
                  pageContent.table1.tableLabels.title1
                )}
              </Paragraph>

             <div className="spacer-8"></div>

              <Paragraph fontClassName="subheading" classNames="bold color-aubergine-900">
                {getRightContent(
                  rtlLanguage,
                  pageContent.table1.tableLabels.title2
                )}
              </Paragraph>

              <div className="spacer-8"></div>

              <Paragraph fontClassName="body-l" classNames="color-aubergine-1000">
                {getRightContent(
                  rtlLanguage,
                  pageContent.table1.tableLabels.title3
                )}
              </Paragraph>
            <div className="spacer-8"></div>

             <Paragraph>
                 <div className={styles.linerColored}></div>
              </Paragraph>
        
            <div className="spacer-24"></div>
            
              <StaticTable
              
                coloredColumnsBackgrounds={[2]}
                coloredRowsBackground={[7,14,22,28,36,37,]}
                invertColumnAlign={[0]}
                minWidthColumnIndexes={[2,3]}
                firstColumnWider={true}
                header={getRightContent(rtlLanguage,pageContent.table1.header)}
                contentsRow={getRightContent(
                  rtlLanguage,
                  pageContent.table1.contentRows
                )}
                customTDClasses={[
                  " ",
                  " ",
                  "bold color-aubergine-900",
                  " "
              
                ]}
                  customCellClasses={[
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],
                  [" "," ",`${styles.backgroundColumn}`],
                ]}
                customRowClasses={[
                 "bold color-aubergine-900",
                 " ",
                 " ",
                 " ",
                  " ",
                  " ",
                  " ",
                  " ", 
                  " ", 
                  " ",
                  " ",
                  " ",
                  " ",
                  " ",
                  " ",
                  "bold color-aubergine-900",
                  " ",
                  " ",
                  " ",
                  " ",
                  " ",
                  " ",
                  " ",
                  "bold color-aubergine-900",
                ]}
              />

              <div className="spacer-64"></div>
            </>,
           <> 
     
              <Paragraph fontClassName="h3" classNames="bold color-aubergine-1000">
                {getRightContent(
                  rtlLanguage,
                  pageContent.table2.tableLabels.title1
                )}
              </Paragraph>

             <div className="spacer-8"></div>

              <Paragraph fontClassName="subheading" classNames="bold color-aubergine-900">
                {getRightContent(
                  rtlLanguage,
                  pageContent.table2.tableLabels.title2
                )}
              </Paragraph>

              <div className="spacer-8"></div>

              <Paragraph fontClassName="body-l" classNames="color-aubergine-1000">
                {getRightContent(
                  rtlLanguage,
                  pageContent.table2.tableLabels.title3
                )}
              </Paragraph>

            <div className="spacer-8"></div>
            
           <Paragraph>
                 <div className={styles.linerColored}></div>
            </Paragraph>

            <div className="spacer-24"></div>
              <StaticTable
              
                coloredColumnsBackgrounds={[2]}
                coloredRowsBackground={[2,11,15,20,26]}
                invertColumnAlign={[0]}
                minWidthColumnIndexes={[ 2, 3,]}
                firstColumnWider={true}
                header={getRightContent(rtlLanguage,pageContent.table2.header)}
                contentsRow={getRightContent(
                  rtlLanguage,
                  pageContent.table2.contentRows
                )}
                customTDClasses={[
                  " ",
                  " ",
                  "bold color-aubergine-900",
                  " "
                ]}
                  customCellClasses={[
                  [],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],
                  [],
                  [],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],
                  [],
                  [],
                  [],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],
              
                  
                ]}
                // customRowClasses={[" " ," "]}
              />

              <div className="spacer-64"></div>
            </>,

            <> 
         
              <Paragraph fontClassName="h3" classNames="bold color-aubergine-1000">
                {getRightContent(
                  rtlLanguage,
                  pageContent.table3.tableLabels.title1
                )}
              </Paragraph>

             <div className="spacer-8"></div>

              <Paragraph fontClassName="subheading" classNames="bold color-aubergine-900">
                {getRightContent(
                  rtlLanguage,
                  pageContent.table3.tableLabels.title2
                )}
              </Paragraph>

              <div className="spacer-8"></div>

              <Paragraph fontClassName="body-l" classNames="color-aubergine-1000">
                {getRightContent(
                  rtlLanguage,
                  pageContent.table3.tableLabels.title3
                )}
              </Paragraph>

            <div className="spacer-8"></div>
            
           <Paragraph>
                 <div className={styles.linerColored}></div>
            </Paragraph>

            <div className="spacer-24"></div>
              <StaticTable
              
                coloredColumnsBackgrounds={[2]}
                coloredRowsBackground={[4,7,9,13]}
                invertColumnAlign={[0]}
                minWidthColumnIndexes={[2, 3,]}
                firstColumnWider={true}
                header={getRightContent(rtlLanguage,pageContent.table3.header)}
                contentsRow={getRightContent(
                  rtlLanguage,
                  pageContent.table3.contentRows
                )}
                customTDClasses={[
                  " ",
                  " ",
                  "bold color-aubergine-900",
                  " "
              
                ]}
                  customCellClasses={[
                  [],
                  [],
                  [],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],
                  [],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],
                  [],
                  [],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],
                
                ]}
                // customRowClasses={[" " ," "]}
                
            
              />
              <div className="spacer-64"></div>
            </>,
           <> 
      
              <Paragraph fontClassName="h3" classNames="bold color-aubergine-1000">
                {getRightContent(
                  rtlLanguage,
                  pageContent.table4.tableLabels.title1
                )}
              </Paragraph>

             <div className="spacer-8"></div>

              <Paragraph fontClassName="subheading" classNames="bold color-aubergine-900">
                {getRightContent(
                  rtlLanguage,
                  pageContent.table4.tableLabels.title2
                )}
              </Paragraph>

              <div className="spacer-8"></div>

              <Paragraph fontClassName="body-l" classNames="color-aubergine-1000">
                {getRightContent(
                  rtlLanguage,
                  pageContent.table4.tableLabels.title3
                )}
              </Paragraph>

            <div className="spacer-8"></div>
            
           <Paragraph>
                 <div className={styles.linerColored}></div>
            </Paragraph>

            <div className="spacer-24"></div>

              <StaticTable
              
                coloredColumnsBackgrounds={[]}
                coloredRowsBackground={[6,12]}
                invertColumnAlign={[0]}
                minWidthColumnIndexes={[2, 3,]}
                firstColumnWider={true}
                header={getRightContent(rtlLanguage,pageContent.table4.header)}
                contentsRow={getRightContent(
                  rtlLanguage,
                  pageContent.table4.contentRows
                )}
                // customTDClasses={[
                //   " ",
                //   " ",
                //   " ",
                //   " "
              
                // ]}
                  customCellClasses={[
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [`${styles.colorfirstcol}`],
                  [`${styles.colorfirstcol}`],
                  [`${styles.colorfirstcol}`],
                  [`${styles.colorfirstcol}`],
                  [`${styles.colorfirstcol}`],
                ]}
                 customRowClasses={[
                  " ",
                  " ",
                  " ",
                  " ",
                  " ",
                  " ",
                  " ",
                  `${styles.colorRow}`,
                  `${styles.colorRow}`,
                  `${styles.colorRow}`,
                  `${styles.colorRow}`,
                  `${styles.colorRow}`,
                  ]}
                
              />
              <div className="spacer-64"></div>

            </>,
          <> 
         
              <Paragraph fontClassName="h3" classNames="bold color-aubergine-1000">
                {getRightContent(
                  rtlLanguage,
                  pageContent.table5.tableLabels.title1
                )}
              </Paragraph>
             <div className="spacer-8"></div>

              <Paragraph fontClassName="subheading" classNames="bold color-aubergine-900">
                {getRightContent(
                  rtlLanguage,
                  pageContent.table5.tableLabels.title2
                )}
              </Paragraph>

              <div className="spacer-8"></div>

              <Paragraph fontClassName="body-l" classNames="color-aubergine-1000">
                {getRightContent(
                  rtlLanguage,
                  pageContent.table5.tableLabels.title3
                )}
              </Paragraph>

            <div className="spacer-8"></div>
            
           <Paragraph>
                 <div className={styles.linerColored}></div>
            </Paragraph>

            <div className="spacer-24"></div>

              <StaticTable
              
                coloredColumnsBackgrounds={[2]}
                coloredRowsBackground={[32]}
                invertColumnAlign={[0]}
                minWidthColumnIndexes={[2, 3,]}
                firstColumnWider={true}
                header={getRightContent(rtlLanguage,pageContent.table5.header)}
                contentsRow={getRightContent(
                  rtlLanguage,
                  pageContent.table5.contentRows
                )}
                customTDClasses={[
                  " ",
                  " ",
                  "bold color-aubergine-900",
                  " "
              
                ]}
                 customCellClasses={[
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],
              
                  
                ]}
                //  customRowClasses={[
                //   " ",
                //   " ",
                //   " ",
                //   " ",
                //   " ",
                //   " ",
                //   " ",
                //   ]}
                
              />

              <div className="spacer-64"></div>

              <StaticTable
              
                coloredColumnsBackgrounds={[2]}
                coloredRowsBackground={[8,15,20]}
                invertColumnAlign={[0]}
                minWidthColumnIndexes={[2, 3,]}
                firstColumnWider={true}
                header={getRightContent(rtlLanguage,pageContent.table6.header)}
                contentsRow={getRightContent(
                  rtlLanguage,
                  pageContent.table6.contentRows
                )}
                customTDClasses={[
                  " ",
                  " ",
                  "bold color-aubergine-900",
                  " "
              
                ]}
                 customCellClasses={[
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],
                  [],
                  [],
                  [],
                  [],
                  [" "," ",`${styles.backgroundColumn}`],        
                ]}
                //  customRowClasses={[" "]}    
              />
             <div className="spacer-64"></div>
            </>,
       
          ]}
          />
     </div>
    </div>
  )
}
