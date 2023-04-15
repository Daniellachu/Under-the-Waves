import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/beach.module.css'
import Navbar from '@/components/navbar'
import Topnavbar from '@/components/top-navbar'

export default function Beach() {
  return (
    <>
      <Head>
        <title>Under the Waves | Beach</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Topnavbar/>
        <h1 className={styles.headerTitle}>Beach</h1>
        <div className={styles.parentContainer}>
          <img className={styles.foreground}src='Pixel/Background/Foreground.png'></img>
          <img className={styles.background}src='Pixel/Background/Background.png'></img>
        </div>
        <Navbar/>
        
      </main>
    </>
  )
}