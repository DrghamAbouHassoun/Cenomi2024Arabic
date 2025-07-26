import Paragraph from '../Paragraph/Paragraph'
import { getRightContent } from '../../ts/util';
import DownloadIcon from "./icons/download-dark.svg";
import useAppStore from '../../store';

interface DownloadButtonProps {
  text: string[];
  link: string;
}

const DownloadButton = ({ text, link }: DownloadButtonProps) => {
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  return (
    <a href={link} className="downloadButton" target='_blank' rel="noopener noreferrer">
      <img src={DownloadIcon} alt="Download Icon" />
      <Paragraph fontClassName="subheading bold" classNames="color-aubergine-900">
        {getRightContent(rtlLanguage, text)}
      </Paragraph>
    </a>
  )
}

export default DownloadButton