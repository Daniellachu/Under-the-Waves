import styles from "@/components/popupTutorial/tutorial.module.css"
import { useState } from "react";

export default function PopupTutorial(){
    
    //audio
    function boopSound(){
        let audio = new Audio("/music/bubble-boop.mp3");
        audio.play()
    }

    const [gameTutorial, setGameTutorial] = useState(true)
    
    const Next = (tutorialSection) => {
        let sections = document.getElementsByClassName(tutorialSection);
        for (let i = 0; i < sections.length; i++) {
            sections[i].style.display = "none";
        }
        document.getElementById(tutorialSection).style.display = "flex";
    }  

    return(
        <>
            {gameTutorial &&
                <div className={styles.tutorialContainer}>
                    <div className={styles.popUp}>
                        <div id={"intro"} className={styles.tutorialSection} style={{display:"flex"}}>
                                <img
                                    src="/Pixel/utwalogo2.png"
                                    width={200}
                                    height={200}
                                    alt="character secondary logo"
                                />
                                <h2 className={styles.blueText}>Let's make some waves in this game!</h2>
                                <div className={styles.navButtons}>
                                    <button 
                                        className={styles.skipBtn} 
                                        onClick={()=> {
                                            setGameTutorial(false)
                                            boopSound()
                                        }}>
                                        Skip tutorial
                                    </button>
                                    <button className={styles.nextBtn}
                                        onClick={() => {
                                            Next("beach")
                                            boopSound()
                                        }}
                                    >Next</button>
                                </div>
                        </div>
                        <div id={"beach"} className={styles.tutorialSection} style={{display:"none"}}>
                            <div className={styles.introContent}>     
                                <img
                                    className={styles.icons}
                                    src="/icons/beach.svg"
                                    width={80}
                                    height={80}
                                    alt="beach icon"
                                />
                                <div className={styles.fishRow}>
                                    <img
                                        className={styles.fishFloat}
                                        src="/animals/clown-fish.png"
                                        width={100}
                                        height={100}
                                        alt="clown fish"
                                    />
                                    <img
                                        className={styles.arrowPoint}
                                        src="/Pixel/pixelPointer.svg"
                                        width={40}
                                        height={40}
                                        alt="pointer cursor"
                                    />
                                </div>
                                <p className={styles.description}>
                                    As you scroll through the beach, you will encounter a wide variety of fish species. Click on each fish friend to learn more about them and own unique traits and characteristics.
                                </p>
                                <div className={styles.navButtons}>
                                    <button 
                                        className={styles.skipBtn} 
                                        onClick={()=> {
                                            setGameTutorial(false)
                                            boopSound()
                                        }}>
                                        Skip tutorial
                                    </button>
                                    <button className={styles.nextBtn}
                                        onClick={() => {
                                            Next("aquarium")
                                            boopSound()
                                        }}
                                    >Next</button>
                                </div>
                            </div>
                        </div>
                        <div id={"aquarium"} className={styles.tutorialSection} style={{display:"none"}}>
                            <div className={styles.content}>
                                <img
                                    className={styles.icons}
                                    src="/icons/aquarium.svg"
                                    width={80}
                                    height={80}
                                    alt="aquarium icon"
                                />
                                <img
                                    className={styles.aquarium}
                                    src="/aquarium/aquariumTop.png"
                                    width={280}
                                    height={200}
                                    alt="aquarium"
                                />
                                <p className={styles.description}>
                                    In your own aquarium you'll learn how to care for your own underwater world. Having an aquarium is not just about adding fish - it's also about taking care of them! You'll need to feed your fish and clean their home by performing regular maintenance tasks.
                                </p>
                                <div className={styles.navButtons}>
                                    <button 
                                        className={styles.skipBtn} 
                                        onClick={()=> {
                                            setGameTutorial(false)
                                            boopSound()   
                                        }}>
                                        Skip tutorial
                                    </button>
                                    <button
                                        className={styles.nextBtn}
                                        onClick={() => {
                                            Next("market")
                                            boopSound()
                                        }}
                                    >Next</button>
                                </div>
                            </div>
                        </div>
                        <div id={"market"} className={styles.tutorialSection} style={{display:"none"}}> 
                            <div className={styles.content}>
                                <img
                                    className={styles.icons}
                                    src="/icons/market.svg"
                                    width={80}
                                    height={80}
                                    alt="market icon"
                                />
                                <div className={styles.market}>
                                    <img
                                        src="/market/fish_flakes.png"
                                        alt="fish flakes"
                                        width={100}
                                        height={100}
                                    />
                                    <div className={styles.itemDesc}>
                                        <p>Fish flakes</p>
                                        <div className={styles.price}>
                                            <img
                                                src={"/market/shell.svg"}
                                                width={20}
                                                height={20}
                                                alt="sea shell"
                                            />
                                            <p>30</p>
                                        </div>
                                        <img
                                            src="/buttons/buy.svg"
                                            width={80}
                                            height={30}
                                            alt="buy button"
                                        />
                                        <img
                                            className={styles.arrowPoint2}
                                            src="/Pixel/cursorHand.svg"
                                            width={40}
                                            height={40}
                                            alt="cursor hand"
                                        />
                                    </div>
                                </div>
                                <p className={styles.description}>
                                    In the market, you can purchase a wide range of items to take care of your underwater world. From fish food to cleaning supplies and decorations, you'll find everything you need to keep your fish healthy and your tank sparkling clean.
                                </p>
                                <div className={styles.navButtons}>
                                    <button
                                        className={styles.skipBtn} 
                                        onClick={() => {
                                            setGameTutorial(false)
                                            boopSound()
                                        }}
                                    >
                                    Skip tutorial</button>
                                    <button
                                        className={styles.nextBtn}
                                        onClick={() => {
                                            Next("quiz")
                                            boopSound()
                                        }}
                                    >Next</button>
                                </div>
                            </div>
                        </div>
                        <div id={"quiz"} className={styles.tutorialSection} style={{display:"none"}}>
                            <div className={styles.content}>
                                <img
                                    className={styles.icons}
                                    src="/icons/quiz.svg"
                                    width={80}
                                    height={80}
                                    alt="quiz icon"
                                />
                                <div>
                                    <img
                                        className={styles.crabMove}
                                        src="/animals/velvet-crab.png"
                                        width={50}
                                        height={50}
                                        alt="velvet crab"
                                    />
                                    <p className={styles.quizQuestion}>
                                        What is the largest fish in the world?
                                    </p>
                                </div>
                                <p className={styles.description}>
                                    Test your knowledge of the ocean, its inhabitants, and the environment in the quiz. Answer questions correctly to earn seashells, which you can use to purchase items in the market.
                                </p>
                                <div className={styles.navButtons}>
                                    <button
                                        className={styles.skipBtn} 
                                        onClick={() => {
                                            setGameTutorial(false)
                                            boopSound()
                                        }}
                                    >
                                    Skip tutorial</button>
                                    <button
                                        className={styles.nextBtn}
                                        onClick={() => {
                                            Next("end")
                                            boopSound()
                                        }}
                                    >Next</button>
                                </div>
                            </div>
                        </div>
                        <div id={"end"} className={styles.tutorialSection} style={{display:"none"}}>
                            <div className={styles.content}>
                                <img
                                    className={styles.icons2}
                                    src="/Pixel/utwalogo2.png"
                                    width={100}
                                    height={100}
                                    alt="character secondary logo"
                                />
                                <img
                                    src="/Pixel/kikaLogo.png"
                                    width={200}
                                    height={200}
                                    alt="character secondary logo"
                                />
                                <div className={styles.description}>
                                    <h3>
                                        Water you waiting for? grab your scuba gear and let's dive 
                                        <br></br><span>Under the Waves!</span>
                                    </h3>
                                </div>
                                <div className={styles.navButtons}>
                                    <button
                                        className={styles.skipBtn} 
                                        onClick={() => {
                                            setGameTutorial(false)
                                            boopSound()
                                        }}
                                    >
                                    Let's go!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}