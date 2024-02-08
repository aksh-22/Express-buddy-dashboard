import classes from "./RoleFunction.module.css";
import { FaCircleInfo } from "react-icons/fa6";
import { useEffect, useState } from "react";
import RoleFunctionBox from "src/components/RoleFunctionBox/RoleFunctionBox";
import Button from "src/components/Button/Button";

export default function RoleFunction() {
  const [role, setRole] = useState({
    view: false,
    edit: true,
    order: false,
    customer: false,
    partner: false,
    payment: true,
    admin: true,
    promotional: false,
    report: true,
    notification: true,
    setting: true,
  });

  const handleChange = (task: string) => {
    setRole((prevRole: any) => {
      return { ...prevRole, [task]: !prevRole[task] };
    });
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <p className={classes.heading}>Role Function</p>

        <div className={classes.box}>
          <p style={{ marginBottom: "1rem" }}>Select Role Function</p>
          <div>
            <select style={{ padding: "0.7rem 11rem 0.7rem 1rem" }}>
              <option value="expr">expr</option>
              <option value="testadmin">testadmin</option>
              <option value="superAdmin">Super Admin</option>
              <option value="dev">dev</option>
            </select>
            <span
              style={{
                cursor: "pointer",
                marginLeft: "2rem",
                color: "#cf1c34",
              }}
            >
              Restore Defaults
            </span>
            <span
              style={{
                cursor: "pointer",
                marginLeft: "2rem",
                color: "#cf1c34",
              }}
            >
              Edit Role Name
            </span>
            <Button
              btnStyle="btnSubmit"
              tabStyle=""
              style={{
                padding: "0.8rem",
                borderRadius: "2rem",
                fontSize: "1rem",
                marginLeft: "22rem",
              }}
            >
              Add New Role
            </Button>
          </div>

          <div className={classes.info}>
            <strong>General Permission</strong>
            <span className={classes.infoIcon}>
              <FaCircleInfo />
            </span>
          </div>

          <RoleFunctionBox
            role={role.view}
            onChange={() => handleChange("view")}
            count="1"
            task="View"
          />
          <RoleFunctionBox
            role={role.edit}
            onChange={() => handleChange("edit")}
            count="2"
            task="Editor"
          />

          <div className={classes.info}>
            <strong>Functional Permission</strong>
            <span style={{ left: "11.3rem" }} className={classes.infoIcon}>
              <FaCircleInfo />
            </span>
          </div>

          <RoleFunctionBox
            role={role.order}
            onChange={() => handleChange("order")}
            count="1"
            task="Order Management"
          />
          <RoleFunctionBox
            role={role.customer}
            onChange={() => handleChange("customer")}
            count="2"
            task="Customer Management"
          />
          <RoleFunctionBox
            role={role.partner}
            onChange={() => handleChange("partner")}
            count="3"
            task="Partner Management"
          />
          <RoleFunctionBox
            role={role.payment}
            onChange={() => handleChange("payment")}
            count="4"
            task="Payment"
          />
          <RoleFunctionBox
            role={role.admin}
            onChange={() => handleChange("admin")}
            count="5"
            task="Admin Settings"
          />
          <RoleFunctionBox
            role={role.promotional}
            onChange={() => handleChange("promotional")}
            count="6"
            task="Promotional"
          />
          <RoleFunctionBox
            role={role.report}
            onChange={() => handleChange("report")}
            count="7"
            task="Reports"
          />
          <RoleFunctionBox
            role={role.notification}
            onChange={() => handleChange("notification")}
            count="8"
            task="Notifications"
          />
          <RoleFunctionBox
            role={role.setting}
            onChange={() => handleChange("setting")}
            count="9"
            task="Settings"
          />
          <Button btnStyle="saveChanges" tabStyle="">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
