import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  function waterSound(){
    let audio = new Audio("/music/waterdrop.mp3");
    audio.play()
  }

  return (
    <>
      <Head>
        <title>Under the Waves</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Pixel/utwalogo.png" />
      </Head>
      <main className={styles.main}>
        <audio autoPlay src={"/music/Island Tour.mp3"} loop={true} autostart={true}></audio>
        <Image className={styles.mainImage} src={"/Pixel/Background/seaBackground.gif"}
          width={414}
          height={820}
        />
        <div className={styles.mainContent}>
          <div className={styles.titleContainer}>
            <h1 id={styles.mainTitle}>
              <span id={styles.word1} className={styles.word}>Under</span>
              <span id={styles.word2} className={styles.word}>The</span>
              <span id={styles.word3} className={styles.word}>Waves</span>
            </h1>
          </div>
          <div>
            <Image className={styles.character} src={"/Pixel/charac-higher-res.gif"} width={150} height={150}/>
            <p className={styles.mainDescription}>
              Welcome aboard, adventurer! Get ready to dive into a world of discovery and exploration as we embark on an exciting journey to the depths of the ocean.
            </p>
          </div>
          <div className={styles.navigationContainer}>
            <Link href={"/loadingpg"}>
              <Image 
              onClick={waterSound}
              id={styles.sound} 
              itemType='button' 
              className={styles.landingPgButtons}
              src={"/buttons/startButton.svg"} 
              height={49} 
              width={160}
              alt='start'/>
            </Link>
            <Link href={"/about"}>
              <Image 
              onClick={waterSound}
              id={styles.sound} 
              itemType='button' 
              className={styles.landingPgButtons}
              src={"/buttons/aboutButton.svg"} 
              height={49} 
              width={160}
              alt='about'/>
            </Link>
          </div>
        </div>
      </main>    
    </>
  )
}
