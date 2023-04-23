
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/quiz.module.css'
import Topnavbar from '@/components/top-navbar'
import Navbar from '@/components/navbar'
import React from 'react'

export default function Quiz() {
    return (
      <>
        <Head>
          <title>Under the Waves | Quiz</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Topnavbar />
          <h1><center>Quiz</center></h1>
          <Image
            className={styles.largebox}
            src={"/boxes/wide_box.PNG"}
            width={310}
            height={195}
          />
          <br></br>
          <Image
            className={styles.smallbox}
            src={"/pixel/bluebutton.svg"}
            width={210}
            height={55}
          />
          <br></br>
          <Image
            className={styles.smallbox}
            src={"/pixel/bluebutton.svg"}
            width={210}
            height={55}
          />
          <br></br>
          <Image
            className={styles.smallbox}
            src={"/pixel/bluebutton.svg"}
            width={210}
            height={55}
          />
          <br></br>
          <Image
            className={styles.smallbox}
            src={"/pixel/bluebutton.svg"}
            width={210}
            height={55}
          />
          <br></br>

          <a href="beach" className={styles.quizstart}>
          <div className={styles.quizstart}>
    
          <div className={styles.quiz__start_text}>
            
          <span>Next</span>
          </div>
          </div>
          </a>
          <Navbar />
        </main>
      </>
    )
}