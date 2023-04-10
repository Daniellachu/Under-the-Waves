Íimport styles from "./top-navbar.module.css"
import Image from 'next/image'
import Link from "next/link"
import { useState } from 'react'

export default function topNavbar() {

    const [popup, setPopup] = useState(true);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.icons_part}>
                    <Link href={"/quiz"}>
                        <Image
                            className={styles.menu_icon}
                            src={"./icons/quiz.svg"}
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
                                            className={styles.menu_icon}
                                            src={"./icons/menu.svg"}
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                </div>
                            </div>
                            : 
                            <div className={styles.popup}>
                                <Image 
                                    className={styles.background_image}
                                    src={"/boxes/menu_box.png"}
                                    width={300}
                                    height={500}
                                />
                                <div className={styles.menu_buttons}>
                                    <p onClick={() => setPopup(true)}>
                                        <Image
                                            className={styles.buttons}
                                            src={"./buttons/continue.svg"}
                                            width={155}
                                            height={50}
                                        />
                                    </p>
                                    <Link href={"/save_1"}>
                                        <Image
                                            className={styles.buttons}
                                            src={"./buttons/save.svg"}
                                            width={155}
                                            height={50}
                                        />
                                    </Link>
                                    <Link href={"/settings"}>
                                        <Image
                                            className={styles.buttons}
                                            src={"./buttons/settings.svg"}
                                            width={155}
                                            height={50}
                                        />
                                    </Link>
                                    <Link href={"/"}>
                                        <Image
                                            className={styles.buttons}
                                            src={"./buttons/quit.svg"}
                                            width={155}
                                            height={50}
                                        />
                                    </Link>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}