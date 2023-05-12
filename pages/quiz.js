import Head from 'next/head'
import styles from "@/styles/quiz.module.css"
import Navbar from "@/components/navbar"
import Topnavbar from '@/components/top-navbar'
import Image from "next/image"
import { useState } from 'react'

export default function QuizPage(){

    const [showOceanQuiz, setOceanQuiz] = useState(false);
    const [showFishQuiz, setFishQuiz] = useState(false);

    function boopSound(){
        let audio = new Audio("/music/Bubble-pop.mp3");
        audio.play()
    }

    return(
        <>
            <Head>
            <title>Under the Waves | Quiz</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <audio autoPlay src={"/music/Bubbling.mp3"} loop="true" autostart="true"></audio>
                <Topnavbar/>
                <h1 className={styles.headerTitle}>Quiz</h1>
                <div className={styles.container}>
                    <Image
                        className={styles.largebox}
                        src={"/quiz/pre-question.jpg"}
                        width={310}
                        height={195}
                    />
                    <div className={styles.tips}>
                        <Image
                            src={"/Pixel/character-face.gif"}
                            width={120}
                            height={120}
                        />
                        <p>
                            Click on one to start the quiz!
                        </p>
                    </div>
                    <div className={styles.quizCategories}>
                        <div className={styles.quizSection}>
                            <Image 
                                
                                className={styles.quizCover} 
                                src={"/animals/blue-whale.png"} 
                                width={50} 
                                height={50}
                            />
                            <a className={styles.quizLink} href={"/oceanQuiz"}>
                                <p onClick={boopSound}>
                                    All about: The Ocean
                                </p>
                            </a>
                        </div>
                        <div className={styles.quizSection}>
                            <Image 
                                className={styles.quizCover} 
                                src={"/animals/clown-fish.png"} 
                                width={50} 
                                height={50}
                            />
                            <a className={styles.quizLink} href={"/fishQuiz"}>
                                <p onClick={boopSound}>
                                    All about: The aquatic animals
                                </p>
                            </a>
                        </div>
                        <div className={styles.quizSection}>
                            <Image 
                                className={styles.quizCover2} 
                                src={"/quiz/waste-pollution.png"} 
                                width={50} 
                                height={35}
                            />
                            <a className={styles.quizLink} href={"/wasteQuiz"}>
                                <p onClick={boopSound}>
                                    All about: Ocean Waste
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <Navbar/>
            </main>
        </>
    )
}