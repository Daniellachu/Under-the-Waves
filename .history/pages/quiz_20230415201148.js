import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/quiz.module.css'
import Topnavbar from '@/components/top-navbar'


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
          <Image
            className={styles.iphonesize}
            src={"/quiz/quiz-start.jpg"}
            width={410}
            height={545}
          />
          
        </main>
      </>
    )
  }