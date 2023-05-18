import logo from "../assets/images/logo.png";
import {
  HeaderContentData,
  HeaderContentType,
} from "../data/header-content.data";
import { BsQuestionCircle } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { RouteNamePatient } from "../routes/routes";

export interface HeaderProps {
  isLogin?: boolean;
}

const HeaderComponent = (props: HeaderProps) => {
  let location = useLocation();

  const activeRoute = (routeName: string) => {
    return location.pathname.includes(routeName);
  };

  return (
    <div className="header w-full h-20 shadow-md">
      <div className="header-container flex w-10/12 content-center h-full justify-between items-center">
        <div className="header-logo flex">
          <Link to={RouteNamePatient.HOME}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header-selection">
          <ul className="flex gap-16">
            {HeaderContentData.map((item: HeaderContentType, index: number) => (
              <Link to={item.slug}>
                <li
                  key={index}
                  className={`font-semibold cursor-pointer ${
                    activeRoute(item.slug) ? " active-section-header" : ""
                  }`}
                >
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
