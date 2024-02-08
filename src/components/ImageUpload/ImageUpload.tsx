import { IoCloudUploadOutline } from "react-icons/io5";
import { RiUploadCloudFill } from "react-icons/ri";
import classes from "./ImageUpload.module.css";
import { useState } from "react";

type Props = {
  heading: string;
  spanText: string;
};

export default function ImageUpload({ heading, spanText }: Props) {
  // const [images, setImages] = useState([]);
  const [file, setFile] = useState([]);

  function handleChange(e) {
    // setFile(URL.createObjectURL(e.target.files[0]));
    setFile([...e.target.files]);
  }

  console.log(file);

  return (
    <div>
      <p className={classes.paraImage}>{heading}</p>
      <div className={classes.singleImg}>
        <div className={classes.iconWrapper}>
          <input type="file" onChange={handleChange} />
          {/* {file.length ? (
            <img
              src={file}
              alt=""
              style={{
                width: "17rem",
                height: "10rem",
                borderRadius: "15px",
              }}
            />
          ) : (
            <>
              <RiUploadCloudFill className={classes.imgIconFill} />
              <IoCloudUploadOutline className={classes.imgIconOutline} />
              <input type="file" onChange={handleChange} />
            </>
          )}
        </div>
        {!file.length ? (
          <span className={classes.imgSpan}>{spanText}</span>
        ) : null} */}
        </div>
      </div>
    </div>
  );
}
