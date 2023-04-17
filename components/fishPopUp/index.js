import data from '@/data/fishes.json'
import { use, useState } from "react";

export default function fishPopUp(){
    const [fishData, setFishData] = useState([...data])
    const [isActive, setIsActive] = useState (false)
    console.log(data);

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
            <div className={styles.popUpContainer}>
                <Image src={"/animals/seahorse.png"} height={100} width={100}onClick={()=> setIsActive(true)}></Image>
                {isActive &&(
                    <div className={styles.popUp}>
                    <div className={styles.popUpNav}>
                        <button className={styles.greenNav} onClick={() => tab
                        ('General')}>General</button>
                        <button className={styles.yellowNav} onClick={() => tab
                        ('Details')}>Details</button>
                        <button className={styles.buttonClose} onClick={() => setIsActive(false)}>X</button>
                    </div>
                    <Image src={"/animals/seahorse.png"} height={50} width={50}></Image>
                    <div id="General" class="info" style={{display:"block"}}>
                        <div id="general">
                        { data && data.map((info,index) =>
                            (
                            <div key={index} name={info.name}>
                                <p className={styles.fishName}>
                                {info.name}
                                </p>
                                <p>
                                {info.familyName}
                                </p>
                                <div>{info.length} {info.weight}</div>,
                                <div>{info.lifeSpan} {info.location}</div>
                            </div>
                            )
                        )}
                        </div>
                    </div>
                    <div id="Details" class="info" style={{display:"none"}}>
                        <div id="details">
                        {
                            data && data.map((info,index) => (
                            <div key={index}>
                                <ul>
                                    <li>{info.information[0]}</li>
                                    <li>{info.information[1]}</li>
                                    <li>{info.information[2]}</li>
                                </ul>
                            </div>
                            ) )
                        }
                        </div>
                    </div>
                    </div>
                )}
            </div>
        </>
    )
}