import Image from 'next/image'
import Link from "next/link"
import styles from '@/components/top-navbar/top-navbar.module.css'
import { useState } from 'react'

export default function topNavbar({ title = "" }) {
  const screens = {
    main: "main",
    save: "save",
    saveConfirm: "saveConfirm",
    settings: "settings",
    quit: "quit",
  };
  const [screen, setScreen] = useState("");
  // screen switching based on switch statement

  // overall layout

  // top bar navigation itself
  // quiz and hamburger menu icon

  const renderScreen = () => {
    switch (screen) {
      case screens.main:
        return (
          <div className={`${styles.popupMenu} ${styles.mainScreen}`}>
            <Image
              className={styles.popupMenuBox}
              src={"/boxes/menu_box.png"}
              width={300}
              height={500}
            />{" "}
            <button onClick={() => setScreen("")} className={styles.btn}>
              <Image
                src={"./buttons/continue.svg"}
                alt={"./buttons/continue.svg"}
                width={155}
                height={50}
              />
            </button>
            <button onClick={() => setScreen(screens.save)} className={styles.btn}>
              <Image
                src={"./buttons/save.svg"}
                alt={"./buttons/save.svg"}
                width={155}
                height={50}
              />
            </button>
            <button className={styles.btn}>
              <Image
                src={"./buttons/settings.svg"}
                alt={"./buttons/settings.svg"}
                width={155}
                height={50}
              />
            </button>
            <Link href={"/"} className={styles.btn}>
              <Image
                src={"./buttons/quit.svg"}
                alt={"./buttons/quit.svg"}
                width={155}
                height={50}
              />
            </Link>
          </div>
        );
        case screens.save:
            return (
                <div className={`${styles.popupMenuWide}`}>
                    <Image
                    src={"/boxes/wide_box.png"} 
                    alt={"/boxes/wide_box.png"}
                    width={90}
                    height={90}
                    className={styles.popupMenuBox}
                    />
                    <div className={styles.popupMenuContent}>
                        <button className={`${styles.btn} ${styles.closeBtn}`}>X</button>
                        <p>You have unsaved progress, please save your progress</p>
                        <button className={styles.btn}>
                        <Image
                            src={"./buttons/save.svg"}
                            alt={"./buttons/save.svg"}
                            width={155}
                            height={50}
                        />
                        </button>
                    </div>
                </div>
            )
      default:
        return;
    }
  };

  return (
    <>
      <nav className={styles.topNavbar}>
        <Link href={"/quiz"} className={`${styles.quizBtn} ${styles.btn}`}>
          <Image src={"./icons/quiz.svg"} width={50} height={50} />
        </Link>
        {title && <h1 className={styles.title}>{title}</h1>}
        <button
          onClick={() => setScreen(screens.main)}
          className={`${styles.menuBtn} ${styles.btn}`}
        >
          <Image src={"./icons/menu.svg"} width={50} height={50} />
        </button>
      </nav>
      {screen && <div className={styles.backDrop}>{renderScreen()}</div>}
    </>
  );
}
