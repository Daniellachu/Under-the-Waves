import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from "next/link"

export default function Navbar() {
    function popSound(){
        let audio = new Audio("/music/bubble-boop.mp3");
        audio.play()
    }

    function doorBell(){
        let audio = new Audio("/music/doorbell.mp3");
        audio.play()
    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.icons}>
                    <Link href={"/"}>
                        <Image
                            onClick={popSound}
                            className={styles.icon}
                            src={"./icons/home.svg"}
                            width={55}
                            height={55}
                        />
                    </Link>
                    <Link href={"/beach"}>
                        <Image
                            onClick={popSound}
                            className={styles.icon}
                            src={"./icons/beach.svg"}
                            width={50}
                            height={50}
                        />
                    </Link>
                    <Link href={"/aquarium"}>
                        <Image
                            onClick={popSound}
                            className={styles.icon}
                            src={"./icons/aquarium.svg"}
                            width={50}
                            height={50}
                        />
                    </Link>
                    <Link href={"/market"}>
                        <Image
                            onClick={doorBell}
                            className={styles.icon}
                            src={"./icons/market.svg"}
                            width={50}
                            height={50}
                        />
                    </Link>
                </div>
                <div className={styles.base}>

                </div>
            </div>
        </>
    )
}