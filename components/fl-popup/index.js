import { useState } from "react";
import data from "@/data/fishes.json"
import Image from "next/image";
import styles from "@/components/fl-popup/fl.module.css"

export default function Flounder(){   
    const [isShown, setIsShown] = useState(false)
    const [fishData, setFishData] = useState([...data])
    const tab = (fishInfo) => {
        var x, tablinks;
        x = document.getElementsByClassName("info");
        for (let i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        document.getElementById(fishInfo).style.display = "block";
    }

    return(
        <>  
            <div className={styles.container}>
                <Image className={styles.fishFloat} src={"/animals/flounder-fish.png"} height={130} width={130} onClick={()=> setIsShown(true)} />
                {isShown &&(
                    <div className={styles.popup}>
                        <div className={styles.popUpNav}>
                            <button className={styles.greenNav} onClick={() => tab
                            ('General')}>General</button>
                            <button className={styles.yellowNav} onClick={() => tab
                            ('Details')}>Details</button>
                            <button className={styles.buttonClose} onClick={() => setIsShown(false)}>x</button>
                        </div>

                    
                        <div className={styles.generalInfo}>
                            <Image id="flounder"src={"/animals/flounder-fish.png"} height={80} width={80}></Image>
                            <div id="General" class="info" style={{display:"block"}}>
                                <div id="general">
                                    { data && data.map((info,index) => {
                                        if (info.name === "Flounder"){
                                        return (
                                            <div key={index} name={info.name}>
                                                <p className={styles.fishName}>
                                                {info.name}
                                                </p>
                                                <p>{info.familyName}</p>
                                                <div className={styles.infoGeneral}>
                                                    <Image src="/icons/length.png" width={15} height={15} alt="length"/>
                                                    {info.length} 
                                                    <Image src="/icons/weight.png" width={15} height={15} alt="weight"/>
                                                    {info.weight}

                                                </div>
                                                <div className={styles.infoGeneral}>
                                                    <Image src="/icons/lifespan.png" width={15} height={15} alt="life span"/>
                                                    {info.lifeSpan} 
                                                    <Image src="/icons/location.png" width={15} height={15} alt="location"/>
                                                    {info.location}
                                                </div>
                                            </div>
                                        )
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                        <div id="Details" class="info" style={{display:"none"}}>
                            <div id="details">
                            {data && data.map((info, index) => {
                                if (info.name === "Flounder"){
                                return(
                                    <div className={styles.infoList} key={index}>
                                        <ul>
                                            <li>{info.information[0]}</li>
                                            <li>{info.information[1]}</li>
                                            <li>{info.information[2]}</li>
                                        </ul>
                                    </div>
                                )}
                            })}
                            </div>
                        </div> 
                    </div>
                )}    
               
            </div>
        </>
    )
}