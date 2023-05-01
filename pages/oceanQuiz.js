import Head from 'next/head'
import styles from '@/styles/oceanQuiz.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from '@/components/navbar'
import Topnavbar from '@/components/top-navbar'
import questions from '../data/quiz.json'

export default function oceanQuiz(){

    function waterSound(){
        let audio = new Audio("/music/waterdrop.mp3");
        audio.play()
    }

    function popSound(){
        let audio = new Audio("/music/Bubble-pop.mp3");
        audio.play()
    }

    function boopSound(){
        let audio = new Audio("/music/bubble-boop.mp3");
        audio.play()
    }

    const [currentQuestion, setCurrentQuestion] = useState(0);

    //hold all the selected answers
    const [selectedOptions, setSelectedOptions] = useState([]);

    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handlePrevious = () => {
        const prevQues = currentQuestion - 1;
        prevQues >= 0 && setCurrentQuestion(prevQues);
    };
      
    const handleNext = () => {
        const nextQues = currentQuestion + 1;
        nextQues < questions.length && setCurrentQuestion(nextQues);
    };

    const handleAnswerOption = (answer) => {
        setSelectedOptions([
            (selectedOptions[currentQuestion] = { answerByUser: answer }),
        ]);
        setSelectedOptions([...selectedOptions]);
        console.log(selectedOptions);
    };

    const handleSubmitButton = () => {
        let newScore = 0;
        for (let i = 0; i < questions.length; i++) {
          questions[i].answerOptions.map(
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
            <Head>
            <title>Under the Waves | Quiz</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <audio autoPlay src={"/music/Gelato-beach.mp3"} loop="true" autostart="true"></audio>
                <Topnavbar/>
                <h1 className={styles.headerTitle}>Quiz</h1>
                <div className={styles.content_section}>
                    <Link href={"/quiz"}>
                        <Image
                            onClick={boopSound}
                            className={styles.back}
                            src={"/buttons/back.svg"}
                            width={50}
                            height={50}
                        />
                    </Link>
                    { showScore ? (
                        <div>
                            <h3>
                                You scored {score} out of {questions.length}
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
                                        Question {currentQuestion + 1} of {questions.length}
                                    </h4>
                                    <div className={styles.questions}>
                                        {questions[currentQuestion].question}
                                    </div>
                                </div>
                                <div>
                                    {questions[currentQuestion].answerOptions.map((answer, index) => (
                                    <div
                                        className={styles.answerOptions}
                                        key={index}
                                        onClick={() => handleAnswerOption(answer.answer)}
                                    >
                                        <input
                                            onClick={popSound}
                                            className={styles.check_box}
                                            type="radio"
                                            name={answer.answer}
                                            value={answer.answer}
                                            checked={answer.answer === selectedOptions[currentQuestion]?.answerByUser}
                                            onChange={() => handleAnswerOption(answer.answer)}
                                        />
                                        <p>{answer.answer}</p>
                                    </div>
                                    ))}
                                </div>
                                <div className={styles.buttons_section}>
                                    <div onClick={handlePrevious}>
                                        <Image
                                            onClick={waterSound}
                                            className={styles.buttons}
                                            src={"/buttons/prevButton.svg"}
                                            width={160}
                                            height={60}
                                        /> 
                                    </div>
                                    <div
                                        onClick={
                                            currentQuestion + 1 === questions.length
                                            ? handleSubmitButton
                                            : handleNext
                                        }
                                    >
                                    {currentQuestion + 1 === questions.length ? 
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
                            </>
                        )
                    }
                </div>
                <Navbar/>
            </main>
        </>
    )
}