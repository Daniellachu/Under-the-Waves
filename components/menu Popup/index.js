import styles from "./popup.module.css";
import { useState } from "react";
import Link from 'next/link'

export default function PopUp() {
  const screens = {
    main: "main",
    save: "save",
    quit: "quit",
  };

  const [screen, setScreen] = useState(screens.main);

  function saveProgress(changeScreen = true) {
    debugger;
    // code to save to local storage or whatever will go here
    // once saved, we should switch to the "save confirmation" screen
    if (changeScreen) {
        setScreen(screens.save);
    }
  }

  const renderScreen = () => {
    switch (screen) {
      case screens.main:
        return (
          <div className={`${styles.screen} ${styles.mainScreen}`}>
            <button>Continue</button>
            <button onClick={() => {saveProgress()}}>Save</button>
            <Link href={"/settings"}>Settings</Link>
            <button onClick={() => {setScreen(screens.quit)}}>Quit Game</button>

          </div>
        );
    case screens.save:
        return (
          <div className={`${styles.screen}`}>
                <p>Progress Saved Successfully!</p>
                <button onClick={() => {setScreen(screens.main)}}>OK</button>
            </div>
        )

    case screens.quit:
        return (
            <div className={styles.screen}>
                <button onClick={() => {saveProgress(false)}}>Save</button>
                <Link href="/">Quit Game</Link>
            </div>
        ) 
        
      default:
        break;
    }
  };

  return (
    <div className={styles.popup}>
        <div className={styles.popupContent}>
            <button className={styles.closeBtn}>X</button>
            {renderScreen()}
        </div>
    </div>
    );
}
