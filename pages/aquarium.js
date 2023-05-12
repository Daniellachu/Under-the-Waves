import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/aquarium.module.css'
import Navbar from '@/components/navbar'
import Topnavbar from '@/components/top-navbar'
import AquariumSection from '@/components/aquarium_section'

export default function Aquarium() {
    return (
      <>
        <Head>
          <title>Under the Waves</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <audio autoPlay src={"/music/indoor-aquarium.mp3"} loop="true" autostart="true"></audio>
          <Topnavbar/>
          <h1 className={styles.headerTitle}>Aquarium</h1>
          <div className={styles.content_section}>
            <Image
              className={styles.aquarium_image}
              src={"/aquarium/aquarium_1.png"}
              width={410}
              height={430}
            />
            <div className={styles.aquarium}>
              <AquariumSection/>
            </div>
          </div>
          <div className={styles.navbar}>
            <Navbar/>
          </div>
        </main>
      </>
    )
  }