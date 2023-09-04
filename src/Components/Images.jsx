import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styles from "../Styles/Image.module.css";
import Draggable from "react-draggable";

const Images = () => {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
  );
  const [inputVal, setInputVal] = useState("Work is Life");
  const [inputWidth, setInputWidth] = useState(inputVal.length || 0);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.unsplash.com/photos/random?orientation=landscape&client_id=jx4QHv5IzN5BPiGHxszR_Amu11Cx81ggIUG8q26_cc0`
  //     )
  //     .then((res) => setImage(res?.data?.urls?.full));
  // }, []);

  useEffect(() => {
    setInputWidth(inputVal.length * 15);
  }, [inputVal]);

  return (
    <div className={styles.main}>
      <div
        className={styles.dragDiv}
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <Draggable bounds="parent">
          <input
            role="textbox"
            value={inputVal}
            className={styles.dragInput}
            onChange={(e) => {
              console.log(e.target.value);
              setInputVal(e.target.value);
            }}
            style={{ width: `${inputWidth}px` }}
          />
        </Draggable>
      </div>
    </div>
  );
};

export default Images;
