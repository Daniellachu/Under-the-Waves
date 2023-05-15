import { useState } from "react";
import styles from "@/components/tutorial/tutorial.module.css"
import tutorialShow from "@/hooks/gameTutorial";

export default function Tutorial(){

    var currentPopup = 1;
    var totalPopups = 4;

    const [gameTutorial, setGameTutorial] = useState(true)
    const {popUp, setPopup} = tutorialShow()

    const Next = (tutorialSection) => {
        let steps = document.getElementsByClassName("tutorialSection");
        for (let i = 0; i < steps.length; i++) {
            steps[i].style.display = "none";
        }
        document.getElementById(tutorialSection).style.display = "block";
    }

    function closePopup() {
        document.getElementsByClassName("tutorialSection").style.display = "none";
      }

    return(
        <>
            {gameTutorial && 
                <div className={styles.tutorialBackground}>
                    <div className={styles.popUp} id="tutorial">
                        <div className={styles.tutorialSection} id="popup1" style={{display:"flex"}}>
                            <img
                                src="/Pixel/kikaLogo.png"
                                width={100}
                                height={100}
                            />
                            <div>
                                <button
                                    onClick={() => setGameTutorial(false)}
                                >
                                x</button>
                            </div>
                            <h2>Let's explore under the waves!</h2>
                            <p>
                                As you scroll through the ocean, you will encounter a wide variety of fish species, each with their own unique traits and characteristics. You will learn about their behaviors, diets, and habitats through interactive pop-ups.
                            </p>
                            <div>
                                <button
                                    onClick={Next("popup2")}
                                >Next</button>
                            </div>
                            
                        </div>
                        <div id={"popup2"} className={styles.tutorialSection} style={{display:"none"}}>
                            <div>
                                <p>
                                you'll learn how to create and care for your own underwater world. 
                                But creating an aquarium is not just about adding fish - it's also about taking care of them! You'll need to feed your fish and keep the tank clean by adding moss, filtering the water, and performing regular maintenance tasks.
                                </p>
                                <div>
                                    <button
                                        onClick={Next("popup3")}
                                    >Next</button>
                                </div>
                                <div>
                                    <button
                                        onClick={setGameTutorial(false)}
                                    >
                                    x</button>
                                </div>
                            </div>
                        </div>
                        <div id={"popup3"} className={styles.tutorialSection} class={styles.aquarium}style={{display:"none"}}>
                            <p>
                                In the market you can purchase a variety of items to care for your fish and keep your aquarium clean.
                            </p>
                            <div>
                                <button
                                    onClick={Next("popup4")}
                                >Next</button>
                            </div>
                            <div>
                                <button
                                    onClick={() => setGameTutorial(false)}
                                >
                                x</button>
                            </div>
                        </div>
                        <div id={"popup4"} className={styles.tutorialSection} style={{display:"none"}}>
                            <p>
                                You might be asking yourself, how can i afford all that stuff?
                                well in the quiz section you can test your knowledge of the ocean, its inhabitants, and the environment. Answer questions correctly to earn seashells, which you can use to purchase items in the game.
                            </p>
                            <div>
                                <button
                                    onClick={() => setGameTutorial(false)}
                                >
                                x</button>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}