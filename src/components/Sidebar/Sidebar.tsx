import ExpressValetLogo from "src/assets/image/expressValetLogo.png";
// import ExpressDeliveryLogo from "src/assets/image/expressDeliveryLogo.png";

import styles from "./Sidebar.module.css";
import Button from "../Button/Button";

import { Link, useLocation, useNavigate } from "react-router-dom";
import MiniTabs from "../MiniTabs/MiniTabs";
import { useState } from "react";
import { SidebarData } from "./SidebarData";
import { useDispatch } from "react-redux";
import { setAuth } from "src/store/reducer/appReducer";

type ListProp = {
  path: string;
  text: string;
  id: string;
};

export default function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(
    pathname.split("/").length === 2
      ? pathname.split("/")[1]
      : pathname.split("/")[2]
  );

  return (
    <div className={styles.sidebar}>
      <div className={styles.circle}>
        <Link to="">
          <img
            className={styles.valetLogo}
            src={ExpressValetLogo}
            alt="Express Valet Logo"
          />
        </Link>
      </div>
      <hr className={styles.rule} />

      <ul className={styles.tab}>
        {SidebarData.map((sideElement: any) => (
          <li key={sideElement.id}>
            <Button
              btnStyle={sideElement.style}
              tabStyle={
                isActive === sideElement.id ? sideElement.tabStyle : null
              }
              onClick={() => {
                !sideElement.child.length ? navigate(sideElement.path) : null;
                sideElement.text === "Logout" && dispatch(setAuth(false));
                isActive !== sideElement.id
                  ? setIsActive(sideElement.id)
                  : setIsActive("");
              }}
            >
              {sideElement?.RIcons ? (
                <div className={styles.increaseSvg}>
                  {sideElement?.RIcons()}
                </div>
              ) : (
                <img src={sideElement.imgPath} alt={sideElement.alt} />
              )}
              <span className={styles.spanText}>{sideElement.text}</span>
            </Button>
            {isActive === sideElement.id && sideElement.child.length
              ? sideElement.child.map((childElem: ListProp) => (
                  <MiniTabs
                    path={childElem.path}
                    tabText={childElem.text}
                    key={childElem.id}
                  />
                ))
              : null}
          </li>
        ))}
      </ul>
      {/* <p className={styles.miniText}>Switch to:</p>
      <div className={styles.rectangle}>
        <Link to="">
          <img
            className={styles.valetLogo}
            src={ExpressDeliveryLogo}
            alt="Express Delivery Logo"
          />
        </Link>
      </div>
      <hr className={styles.sideRule} /> */}
    </div>
  );
}
