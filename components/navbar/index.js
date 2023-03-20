import styles from "./navbar.module.css"
import Image from 'next/image'

export default function Navbar() {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.icons}>
                    <Image
                        className={styles.homeicon}
                        src={"/homeicon.png"}
                        width={50}
                        height={50}
                    />
                    <Image
                        className={styles.shopicon}
                        src={"/shopicon.png"}
                        width={50}
                        height={50}
                    />
                    <Image
                        className={styles.beachicon}
                        src={"/beachicon.png"}
                        width={50}
                        height={50}
                    />
                </div>
                <div className={styles.base}>

                </div>
            </div>
        </>
    )
}