import { useState } from "react"
import styles from "@/components/interact-popup/interact.module.css"


export default function Interact(){
    const [close, setClose] = useState(true)


    return(
        <>
            {
                close ? 
                    <div className={styles.pixelBox}>
                        <p>Interact with me!</p>
                        <button className={styles.buttonClose} onClick={()=> setClose(false)}>x</button>
                    </div>
                : <></>
            }
        </>
    )

}