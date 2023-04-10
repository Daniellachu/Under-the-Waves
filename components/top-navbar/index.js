import styles from "./top-navbar.module.css"
import Image from 'next/image'
import Link from "next/link"
import { useState } from 'react'

export default function topNavbar() {

    const [popup, setPopup] = useState(true);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.icons_part}>
                    <Link href={"/survey"}>
                        <Image
                            className={styles.icon}
                            src={"/survey.png"}
                            width={50}
                            height={50}
                        />
                    </Link>
                    {
                        popup ?
                            <div className={styles.icon}>
                                <div>
                                    <div onClick={() => setPopup(false)}>
                                        <Image
                                            className={styles.icon}
                                            src={"/humburger_menu.png"}
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                </div>
                            </div>
                        : 
                            <div className={styles.popup}>
                                <ul>
                                    <ol>
                                        
                                    </ol>
                                    <ol>
                                        <Link href="/">
                                            <Image
                                                className={styles.facebook}
                                                src={"/icons/facebook.png"}
                                                width={30}
                                                height={30}
                                            />
                                        </Link>
                                    </ol>
                                    <ol>
                                        <Link href="/">
                                            <Image
                                                className={styles.twitter}
                                                src={"/icons/instagram.png"}
                                                width={30}
                                                height={30}
                                            />
                                        </Link>
                                    </ol>
                                </ul>
                            </div>
                    }   </div>
                
                </div>
            </div>
        </>
    )
}