import logo from "../assets/images/logo.png";
import {
  HeaderContentData,
  HeaderContentType,
} from "../data/header-content.data";
import { BsQuestionCircle } from "react-icons/bs";

export interface HeaderProps {
  isLogin?: boolean;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="header w-full h-20 shadow-md">
      <div className="header-container flex w-10/12 content-center h-full justify-between items-center">
        <div className="header-logo flex">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-selection">
          <ul className="flex gap-16">
            {HeaderContentData.map((item: HeaderContentType, index: number) => (
              <li key={index} className="font-semibold cursor-pointer">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <BsQuestionCircle />
          <p>Hỗ trợ</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
