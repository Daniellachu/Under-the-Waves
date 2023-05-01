import data from "@/data/aquaticQuestions.json"
import { useState } from "react"
import aquaticQuestions from "@/data/aquaticQuestions.json"
import Image from "next/image"
import styles from "@/styles/quiz.module.css"
import Navbar from "@/components/navbar"
import Topnavbar from '@/components/top-navbar'
import Link from "next/link"

export default function FishQuiz(){

    function waterSound(){
        let audio = new Audio("/music/waterdrop.mp3");
        audio.play()
    }

    function popSound(){
        let audio = new Audio("/music/Bubble-pop.mp3");
        audio.play()
    }

    const [fishQuestions, setFishQuestion] = useState(0)
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handlePrevious = () => {
        const prevQues = fishQuestions - 1;
        prevQues >= 0 && setFishQuestion(prevQues);
    };
      
    const handleNext = () => {
        const nextQues = fishQuestions + 1;
        nextQues < aquaticQuestions.length && setFishQuestion(nextQues);
    };


    const handleAnswerOption = (answer) => {
        setSelectedOptions([
          (selectedOptions[fishQuestions] = { answerByUser: answer }),
        ]);
        setSelectedOptions([...selectedOptions]);
    };

    const handleSubmitButton = () => {
        let newScore = 0;
        for (let i = 0; i < aquaticQuestions.length; i++) {
            aquaticQuestions[i].answerOptions.map(
            (answer) =>
              answer.isCorrect &&
              answer.answer === selectedOptions[i]?.answerByUser &&
              (newScore += 1)
          );
        }
        setScore(newScore);
        setShowScore(true);
      };

    return(
        <>
            <div className={styles.main}>
                <audio autoPlay src={"/music/Gelato-beach.mp3"} loop="true" autostart="true"></audio>
                <Topnavbar />
                <h1 className={styles.headerTitle}>Quiz</h1>
                <div className={styles.quizContainer}>
                    <Link href={"/quiz"}>
                        <Image
                            className={styles.back}
                            src={"/buttons/back.svg"}
                            width={50}
                            height={50}
                        />
                    </Link>
                    { showScore ? (
                            <div>
                                <Image src={"/Pixel/character-face.gif"} width={200} height={200}></Image>
                                <h3>
                                    You got {score} out of {aquaticQuestions.length}
                                </h3>
                                <Link href={"/quiz"} className={styles.buttons_section}>
                                    <Image
                                        onClick={waterSound}
                                        className={styles.buttons}
                                        src={"/buttons/backToQuiz.svg"}
                                        width={150}
                                        height={60}
                                    /> 
                                </Link>
                            </div>
                        ) : (
                            <>
                                <div>
                                    <h4>
                                        Question {fishQuestions + 1} of {aquaticQuestions.length}
                                    </h4>
                                    <div className={styles.currentQuestion}>
                                        <h4>
                                            {aquaticQuestions[fishQuestions].question}
                                        </h4>
                                    </div>
                                    <div className={styles.choicesContainer}>
                                        {aquaticQuestions[fishQuestions].answerOptions.map((answer, index) => (
                                            <div
                                            key={index}
                                            className={styles.choices}
                                            onClick={(e) => handleAnswerOption(answer.answer)}
                                            >
                                                <input
                                                    onClick={popSound}
                                                    type="radio"
                                                    className={styles.checkBox}
                                                    name={answer.answer}
                                                    value={answer.answer}
                                                    onChange={(e) => handleAnswerOption(answer.answer)}
                                                    checked={
                                                        answer.answer === selectedOptions[fishQuestions]?.answerByUser
                                                    }
                                                    />
                                                <p className={styles.answers}>{answer.answer}</p>
                                            </div>
                                        ))
                                        }
                                    </div>
                                    <div > 
                                        <div className={styles.navButtons}>
                                            <Image
                                                onClick={handlePrevious} src={"/buttons/prevButton.svg"} width={160} height={48}
                                             />
                                            <div>
                                            <div
                                                onClick={
                                                    fishQuestions + 1 === aquaticQuestions.length
                                                    ? handleSubmitButton
                                                    : handleNext
                                                }
                                            >
                                                {fishQuestions + 1 === aquaticQuestions.length ? 
                                                    <Image
                                                        onClick={waterSound}
                                                        className={styles.buttons}
                                                        src={"/buttons/submitButton.svg"}
                                                        width={160}
                                                        height={60}
                                                    /> 
                                                    :   
                                                    <Image 
                                                        onClick={waterSound}
                                                        className={styles.buttons}
                                                        src={"/buttons/nextButton.svg"}
                                                        width={160}
                                                        height={60}
                                                    />
                                                }
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }  
                </div> 
                <Navbar/>
            </div>
        </>
    )
}