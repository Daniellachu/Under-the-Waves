import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/market.module.css'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Topnavbar from '@/components/top-navbar'

export default function Market() {

  function boopSound(){
    let audio = new Audio("/music/Bubble-pop.mp3");
    audio.play()
  }
    return (
      <>
        <Head>
          <title>Under the Waves | Market</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/Pixel/utwalogo.png" />
        </Head>
        <main className={styles.main}>
          <audio autoPlay src={"/music/Bubbline.mp3"} loop="true" autostart="true"></audio>
          <Topnavbar/>
          <h1 className={styles.headerTitle}>Market</h1>
          <div className={styles.content_section}>
            <div className={styles.shell}>
              <Image
                src={"/market/shell.svg"}
                width={30}
                height={30}
              />
              <p>50</p>
            </div>
            <div className={styles.tips}>
              <Image
                src={"/Pixel/character-face.gif"}
                width={120}
                height={120}
              />
              <div className={styles.paragraphs}>
                <p>Click on an item to view details</p>
                <p>Don't have shells? Go to Quiz to win shells! </p>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.items}>
                <Link href={"/market_item_1"}>
                  <Image
                  src={"/market/moss_item.png"}
                  width={125}
                  height={125}
                  />
                </Link>
                <h4>Moss</h4>
                <div className={styles.buy}>
                  <div className={styles.price}>
                    <Image
                      src={"/market/shell.svg"}
                      width={20}
                      height={20}
                    />
                    <p>5</p>
                  </div>
                  <div className={styles.buy_button}>
                    <Link href={"/market_item_1"}>
                      <Image
                        onClick={boopSound}
                        src={"/buttons/buy.svg"}
                        width={80}
                        height={30}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.items}>
                <Link href={"/market_item_2"}>
                  <Image
                    src={"/market/filter_item.png"}
                    width={125}
                    height={125}
                  />
                </Link>
                <h4>Aquarium Filter</h4>
                <div className={styles.buy}>
                  <div className={styles.price}>
                    <Image
                      src={"/market/shell.svg"}
                      width={20}
                      height={20}
                    />
                    <p>30</p>
                  </div>
                  <div className={styles.buy_button}>
                    <Link href={"/market_item_2"}>
                      <Image
                        onClick={boopSound}
                        src={"/buttons/buy.svg"}
                        width={80}
                        height={30}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.items}>
                <Link href={"/market_item_3"}> 
                  <Image
                    src={"/market/fishflakes.svg"}
                    width={150}
                    height={150}
                  />
                </Link>
                <h4>Fish Flakes</h4>
                <div className={styles.buy}>
                  <div className={styles.price}>
                    <Image
                      src={"/market/shell.svg"}
                      width={20}
                      height={20}
                    />
                    <p>10</p>
                  </div>
                  <div className={styles.buy_button}>
                    <Link href={"/market_item_3"}>
                      <Image
                        onClick={boopSound}
                        src={"/buttons/buy.svg"}
                        width={80}
                        height={30}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.items}>
                <Link href={"/market_item_4"}>
                  <Image
                    src={"/market/fishfood.svg"}
                    width={150}
                    height={150}
                  />
                </Link>
                <h4>Fish Pellets</h4>
                <div className={styles.buy}>
                  <div className={styles.price}>
                    <Image
                      src={"/market/shell.svg"}
                      width={20}
                      height={20}
                    />
                    <p>10</p>
                  </div>
                  <div className={styles.buy_button}>
                   <Link href={"/market_item_4"}>
                      <Image
                        onClick={boopSound}
                        src={"/buttons/buy.svg"}
                        width={80}
                        height={30}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Navbar/>
        </main>
      </>
    )
  }