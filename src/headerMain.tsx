import "./headerMain.css"
import styles from "./styles.module.css";
import {useState} from 'react';

export function HeaderMain() {
      const [buttonColor, setButtonColor] = useState("lightPink");

      return (
        <div className = {styles.headerMainStyle} >
      <button className = {styles.frontHeaderBox} style = {{backgroundColor: buttonColor}} onClick={handleClickMain} onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}> 
        <h1 style = {{textShadow: "1px 2px 2px black"}}>Carrie Still</h1>
      </button>
       </div>

       
      )

      function handleClickMain() {
        console.log("click!")
      }
      function handleMouseEnter() {
        setButtonColor("palevioletred");
        console.log(buttonColor);
      }
    
      function handleMouseLeave() {
        setButtonColor("lightPink");
        console.log(buttonColor);
      }
}