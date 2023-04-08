import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/beach.module.css'
import Navbar from '@/components/navbar'

export default function Beach() {
  return (
    <>
      <Head>
        <title>Under the Waves | Aquarium</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Beach</h1>
        <img src='Pixel/Background/testbg4.svg'></img>
        <Navbar></Navbar>
      </main>
    </>
  )
}