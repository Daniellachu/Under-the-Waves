import Head from "next/head";
import Image from "next/image";
// import styles from '@/styles/quiz.module.css'
import Topnavbar from "@/components/top-navbar";
import Navbar from "@/components/navbar";
import styles from "@/styles/settings.module.css";
import Link from "next/link";
import { useStore } from "@/components/contexts/StoreContext";

export default function Settings() {
  const { store, updateStore } = useStore();
  const { settings } = store;
  // // if we only want to update settings.audio
  // updateStore('settings', {...store.settings, audio: newAudio})

  const volumeOptions = [0, 0.25, 0.5, 0.75, 1];

  function incrementVolume() {
    // find the matching index for the current volume
    const currentVolumeIndex = volumeOptions.findIndex((volumeOption) => {return volumeOption === settings.audio})
    const isHighestIndex = currentVolumeIndex === volumeOptions.length -1
    let newAudio; 
    if(isHighestIndex) {
        newAudio = volumeOptions[currentVolumeIndex]
    } else {
      newAudio = volumeOptions[currentVolumeIndex + 1]
    }
    updateAudio(newAudio)
   
    
    
  }
  function decrementVolume() {
    const currentVolumeIndex = volumeOptions.findIndex((volumeOption) => {return volumeOption === settings.audio})
    const isLowestIndex = currentVolumeIndex === 0
    let newAudio; 
    if(isLowestIndex) {
        newAudio = volumeOptions[currentVolumeIndex]
    } else {
      newAudio = volumeOptions[currentVolumeIndex - 1]
    }
    updateAudio(newAudio)
   

  }

  function updateAudio(newAudio) {
    updateStore("settings", { ...settings, audio: newAudio });
  }
  function renderButtons() {
    const { audio } = settings;
    const button1Active = audio > 0 ? styles.active : "";
    const button1 = (
      <button
        onClick={() => updateAudio(0.25)}
        className={`${styles.audioLevel} ${button1Active}`}
      ></button>
    );

    const button2Active = audio >= 0.5 ? styles.active : "";
    const button2 = (
      <button
        onClick={() => updateAudio(0.5)}
        className={`${styles.audioLevel} ${button2Active}`}
      ></button>
    );

    const button3Active = audio >= 0.75 ? styles.active : "";
    const button3 = (
      <button
        onClick={() => updateAudio(0.75)}
        className={`${styles.audioLevel} ${button3Active}`}
      ></button>
    );

    const button4Active = audio >= 1 ? styles.active : "";
    const button4 = (
      <button
        onClick={() => updateAudio(1)}
        className={`${styles.audioLevel} ${button4Active}`}
      ></button>
    );

    // package all the buttons up into an array, which we return
    const btnArray = [button1, button2, button3, button4];
    return btnArray;
  }

  return (
    <>
      <Head>
        <title>Under the Waves | Settings</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Topnavbar title={"settings"} />
        {/* <h1 className={styles.headerTitle}>Settings</h1> */}
        <Image
          className={styles.backButton}
          src={"/buttons/settingsBack.svg"}
          alt={"/buttons/settingsBack.svg"}
          width={42}
          height={42}
        />
        <div className={styles.parentContainer}>
          <Image
            src={"/boxes/shop_box.png"}
            alt={"/boxes/shop_box.png"}
            width={150}
            height={150}
          />
          <Image
            className={styles.profileIcon}
            src={"/Pixel/character-face.gif"}
            alt={"/Pixel/character-face.gif"}
            width={120}
            height={120}
          />
        </div>

        <div className={styles.changeLanguage}>
          <p>Language</p>
          <p>English</p>
        </div>

        <h3 className={styles.audioTitle}>Audio</h3>
        <div className={styles.audioBar}>
          <button onClick={decrementVolume} className={styles.audioStep}>
            <Image
              src={"/buttons/noAudio.svg"}
              alt={"/buttons/noAudio.svg"}
              width={50}
              height={50}
            />
          </button>
          <div className={styles.audioLevelBar}>{renderButtons()}</div>
          <button onClick={incrementVolume} className={styles.audioStep}>
            <Image
              src={"/buttons/Audio.svg"}
              alt={"/buttons/Audio.svg"}
              width={50}
              height={50}
            />
          </button>
        </div>

        <div className={styles.modeButton}>
          <p className={styles.modeTitle}>Mode</p>
    
            <Image
              className={styles.uiModeButton}
              src={"./buttons/modeButton.svg"}
              alt={"./buttons/modeButton.svg"}
              width={180}
              height={60}
            />
          
        </div>

        <div className={styles.settingsSaveButton}>
          <div className={styles.confirmationButtons}>
            <Image
              className={styles.confirmationButtons}
              src={"/buttons/saveButton.svg"}
              alt={"/buttons/saveButton.svg"}
              width={106}
              height={33}
            />
            <Image
              className={styles.confirmationButtons}
              src={"/buttons/reset.svg"}
              alt={"/buttons/reset.svg"}
              width={106}
              height={33}
            />
          </div>
        </div>

        <Navbar />
      </main>
    </>
  );
}
