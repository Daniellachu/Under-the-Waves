import data from "@/data/aquaticQuestions.json"
import { useState } from "react"
import aquaticQuestions from "@/data/aquaticQuestions.json"
import Image from "next/image"
import styles from "@/styles/quiz.module.css"
import Navbar from "@/components/navbar"
import Topnavbar from '@/components/top-navbar'
import Link from "next/link"

export default function FishQuiz(){

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
                    <h3>All about aquatic animals</h3>
                    { showScore ? (
                            <div>
                                <h3>
                                    You {score} out of {aquaticQuestions.length}
                                </h3>
                                <Link href={"/quiz"} className={styles.buttons_section}>
                                    <Image
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
                                    <p>
                                        Question {fishQuestions + 1} of {aquaticQuestions.length}
                                    </p>
                                    <div className={styles.currentQuestion}>
                                        <h4>
                                            {aquaticQuestions[fishQuestions].question}
                                        </h4>
                                    </div>
                                    <div>
                                        {aquaticQuestions[fishQuestions].answerOptions.map((answer, index) => (
                                            <div
                                            key={index}
                                            className={styles.choices}
                                            onClick={(e) => handleAnswerOption(answer.answer)}
                                            >
                                                <input
                                                    type="radio"
                                                    name={answer.answer}
                                                    value={answer.answer}
                                                    onChange={(e) => handleAnswerOption(answer.answer)}
                                                    checked={
                                                        answer.answer === selectedOptions[fishQuestions]?.answerByUser
                                                    }
                                                    className=""
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
                                                        className={styles.buttons}
                                                        src={"/buttons/submitButton.svg"}
                                                        width={160}
                                                        height={60}
                                                    /> 
                                                    :   
                                                    <Image 
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