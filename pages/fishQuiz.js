import data from "@/data/aquaticQuestions.json"
import { useState } from "react"
import aquaticQuestions from "@/data/aquaticQuestions.json"
import Image from "next/image"
import styles from "@/styles/newQuiz.module.css"
import Navbar from "@/components/navbar"
import Topnavbar from '@/components/top-navbar'

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
                <h1 className={styles.pageTitle}>
                    Quiz
                </h1>
                <div>
                    <div>
                        <h3>All about aquatic animals</h3>
                        <p>
                            Question {fishQuestions + 1} of {aquaticQuestions.length}
                        </p>
                        <div className={styles.currentQuestion}>
                            <h4>
                                {aquaticQuestions[fishQuestions].question}
                            </h4>
                        </div>
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
                    </div>

                    <div>
                        <div className={styles.navButtons}>
                            <Image onClick={handlePrevious} src={"/buttons/prevButton.svg"} width={160} height={48}></Image>
                            <Image onClick={handleNext} src={"/buttons/nextButton.svg"} width={160} height={48}></Image>
                            {/* <Image src={"/buttons/submitButton.svg"} width={160} height={48}
                            onClick={handleSubmitButton}/> */}
                    </div>

                </div>
                <Navbar/>
            </div>
        </>
    )
}