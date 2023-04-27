import logo from "../assets/images/logo.png";
import {
  HeaderContentData,
  HeaderContentType,
} from "../data/header-content.data";
import { BsQuestionCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RouteName } from "../data/router.data";

export interface HeaderProps {
  isLogin?: boolean;
}

const HeaderComponent = (props: HeaderProps) => {
  return (
    <div className="header w-full h-20 shadow-md">
      <div className="header-container flex w-10/12 content-center h-full justify-between items-center">
        <div className="header-logo flex">
          <Link to={RouteName.HOME}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header-selection">
          <ul className="flex gap-16">
            {HeaderContentData.map((item: HeaderContentType, index: number) => (
              <Link to={item.slug}>
                <li key={index} className="font-semibold cursor-pointer">
                  {item.title}
                </li>
              </Link>
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

export default HeaderComponent;
