import styles from "@/styles/newQuiz.module.css"
import topNavbar from "@/components/top-navbar"
import Navbar from "@/components/navbar"
import Topnavbar from '@/components/top-navbar'
import Image from "next/image"
export default function QuizPage(){
    return(
        <>
            <div className={styles.container}>
                <Topnavbar />
                <h1 className={styles.pageTitle}>Quiz</h1>
                <Image
                    className={styles.largebox}
                    src={"/quiz/pre-question.jpg"}
                    width={310}
                    height={195}
                />
                <div className={styles.quizCategories}>
                    <div className={styles.quizSection}>
                        <Image className={styles.quizCover} src={"/animals/blue-whale.png"} width={50} height={50}/>
                        <a className={styles.quizLink} href={""}>
                            <p>
                                All about: The Ocean
                            </p>
                        </a>
                    </div>
                    <div className={styles.quizSection}>
                        <Image className={styles.quizCover} src={"/animals/clown-fish.png"} width={50} height={50}/>
                        <a className={styles.quizLink} href={"/fishQuiz"}>
                            <p>
                                All about: The aquatic animals
                            </p>

                        </a>
                    </div>
                </div>
                <Navbar/>
            </div>
        </>
    )
}