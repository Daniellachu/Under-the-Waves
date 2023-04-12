import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from "next/link"

export default function Navbar() {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.icons}>
                    <Link href={"/"}>
                        <Image
                            className={styles.icon}
                            src={"./icons/home.svg"}
                            width={55}
                            height={55}
                        />
                    </Link>
                    <Link href={"/beach"}>
                        <Image
                            className={styles.icon}
                            src={"./icons/beach.svg"}
                            width={50}
                            height={50}
                        />
                    </Link>
                    <Link href={"/aquarium"}>
                        <Image
                            className={styles.icon}
                            src={"./icons/aquarium.svg"}
                            width={50}
                            height={50}
                        />
                    </Link>
                    <Link href={"/shop"}>
                        <Image
                            className={styles.icon}
                            src={"./icons/shop.svg"}
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