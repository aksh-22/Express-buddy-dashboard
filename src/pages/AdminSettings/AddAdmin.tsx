import Input from "src/components/Input/Input";
import classes from "./AddAdmin.module.css";
import Button from "src/components/Button/Button";
import { FaEye } from "react-icons/fa";

import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function AddAdmin() {
  const [displayPassword, setDisplayPassword] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <p className={classes.heading}>Add New Admin</p>
        <div className={classes.summary}>
          <div style={{ padding: "2rem" }}>
            <p>Admin Name</p>
            <Input
              inputStyle="adminText"
              type="text"
              placeholder="Enter Name"
            />

            <p>Email Name</p>
            <Input
              inputStyle="adminText"
              type="email"
              placeholder="Enter Email"
            />

            <p>Role</p>
            <select className={classes.selectOption}>
              <option value="none" selected disabled>
                Select Role
              </option>
              <option value="expr">expr</option>
              <option value="testadmin">testadmin</option>
              <option value="super">Super Admin</option>
            </select>

            <p>Password</p>
            {displayPassword ? (
              <Input
                inputStyle="adminText"
                type="text"
                placeholder="**********"
              />
            ) : (
              <Input
                inputStyle="adminText"
                type="password"
                placeholder="**********"
              />
            )}
            <span style={{ marginLeft: "1rem" }}>
              {displayPassword ? (
                <FaEyeSlash onClick={() => setDisplayPassword(false)} />
              ) : (
                <FaEye onClick={() => setDisplayPassword(true)} />
              )}
            </span>
          </div>
          <Button
            btnStyle="saveChanges"
            style={{
              fontSize: "1rem",
              marginBottom: "2rem",
              marginLeft: "2rem",
            }}
            tabStyle=""
          >
            Add New Admin
          </Button>
        </div>
      </div>
    </div>
  );
}
