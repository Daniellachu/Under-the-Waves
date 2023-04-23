
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
            src={"/quiz/pre-question.jpg"}
            width={310}
            height={195}
          />
          <br></br>
          <Image
            className={styles.smallbox}
            src={"/quiz/p1-question1.jpg"}
            width={210}
            height={85}
          />
          <br></br>
          <Image
            className={styles.smallbox}
            src={"/quiz/p2-question2.jpg"}
            width={210}
            height={55}
          />
          <br></br>
          <Image
            className={styles.smallbox}
            src={"/quiz/p1-question3.jpg"}
            width={210}
            height={55}
          />
          <br></br>
          <Image
            className={styles.smallbox}
            src={"/quiz/p1-question4.jpg"}
            width={210}
            height={55}
          />
          <br></br>

          <a href="beach" className={styles.quizstart}>
          <div className={styles.quizstart}>
          <Image 
            src={"/quiz/startquiz.svg"}
            width={160}
            height={85}
            
          />
          <div className={styles.quiz__start_text}>
            
          <span>Start Quiz</span>
          </div>
          </div>
          </a>
          <Navbar />
        </main>
      </>
    )
}