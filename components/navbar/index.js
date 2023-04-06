import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from "next/link"

export default function Navbar() {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.icons}>
                    <Link href={"/home"}>
                        <Image
                            className={styles.shopicon}
                            src={"/home.png"}
                            width={50}
                            height={50}
                        />
                    </Link>
                    <Link href={"/beach"}>
                        <Image
                            className={styles.beachicon}
                            src={"/beach.png"}
                            width={50}
                            height={50}
                        />
                    </Link>
                    <Link href={"/shop"}>
                        <Image
                            className={styles.shopicon}
                            src={"/shop.png"}
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