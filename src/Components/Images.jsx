import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styles from "../Styles/Image.module.css";
import Draggable from "react-draggable";

const Images = () => {
  const [image, setImage] = useState("");
  const [inputVal, setInputVal] = useState("saaaaaaaaaaaaaaa");
  const inputEl = useRef();

  useEffect(() => {
    console.log(inputEl);
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/random?orientation=landscape&client_id=jx4QHv5IzN5BPiGHxszR_Amu11Cx81ggIUG8q26_cc0`
      )
      .then((res) => setImage(res?.data?.urls?.full));
  }, []);

  return (
    <div className={styles.main}>
      <div
        className={styles.dragDiv}
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        {/* <img src={image} alt="image" style={{ height: "100%" }} /> */}
        <Draggable bounds="parent">
          <input
            role="textbox"
            value={inputVal}
            ref={inputEl}
            className={styles.dragInput}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </Draggable>
      </div>
    </div>
  );
};

export default Images;

//jx4QHv5IzN5BPiGHxszR_Amu11Cx81ggIUG8q26_cc0 --- Access Key
//w7BJB9gni2MGwA3dZlE5H8pSmHsKBId8GKEQVd-U6F0 --- Secret key
