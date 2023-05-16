import Image from "next/image";
import styles from "./aquarium_section.module.css"
import { useState } from 'react'

export default function aquariumSection() {

    //audio
    function waterSound(){
        let audio = new Audio("/music/waterdrop.mp3");
        audio.play()
    }

    function popSound(){
        let audio = new Audio("/music/Bubble-pop.mp3");
        audio.play()
    }

    function boopSound(){
        let audio = new Audio("/music/bubble-boop.mp3");
        audio.play()
    }

    // switch between sections
    const tab = (content) => {
        var x;
        x = document.getElementsByClassName("section");
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(content).style.display = "block";

        let audio = new Audio("/music/bubble-boop.mp3");
        audio.play()
    }

    // fish_1 image click to popup
    const [showfish_1, setShowFish_1] = useState(false);

    //click yes to block
    const fish_1 = () => {
        const crab = document.getElementById("crab");
        crab.style.display = 'block';

        const hunger_1_cell = document.getElementById("hunger_1_cell");
        hunger_1_cell.style.display = 'block';

        const Fish_1_hide= document.getElementById("Fish_1_hide");
        Fish_1_hide.style.display = 'block';
    }

    // fish_2 image click to popup
    const [showfish_2, setShowFish_2] = useState(false);

    //click yes to block
    const fish_2 = () => {
        const clownFish = document.getElementById("clownFish");
        clownFish.style.display = 'block';

        const hunger_1_cell = document.getElementById("hunger_1_cell");
        hunger_1_cell.style.display = 'block';

        const Fish_2_hide= document.getElementById("Fish_2_hide");
        Fish_2_hide.style.display = 'block';
    }

    // fish_3 image click to popup
    const [showfish_3, setShowFish_3] = useState(false);

    //click yes to block
    const fish_3 = () => {
        const seaturtle = document.getElementById("seaturtle");
        seaturtle.style.display = 'block';

        const hunger_1_cell = document.getElementById("hunger_1_cell");
        hunger_1_cell.style.display = 'block';

        const Fish_3_hide= document.getElementById("Fish_3_hide");
        Fish_3_hide.style.display = 'block';
    }

    // fish_flakes click to popup
    const [showFish_flakes, setShowFish_flakes] = useState(false);

    // fish_pellets click to popup
    const [showFish_pellets, setShowFish_pellets] = useState(false);

    //click yes to block
    const fish_food = () => {
        const hunger_5_cell = document.getElementById("hunger_5_cell");
        hunger_5_cell.style.display = 'block';
    }

    // moss click to popup
     const [showMoss, setShowMoss] = useState(false);

    //click yes to block
    const moss = () => {
        const moss = document.getElementById("moss");
        moss.style.display = 'block';

        const Other_1_hide= document.getElementById("Other_1_hide");
        Other_1_hide.style.display = 'block';
    }

    // moss click to popup
    const [showFilter, setShowFilter] = useState(false);

    //click yes to block
    const filter = () => {
        const filter = document.getElementById("filter");
        filter.style.display = 'block';

        const Other_2_hide= document.getElementById("Other_2_hide");
        Other_2_hide.style.display = 'block';
    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.hunger}>
                    <Image
                        src={"/aquarium/hunger_0_cell.svg"}
                        width={260}
                        height={40}
                        alt="hunger"
                    />
                    <Image
                        id="hunger_1_cell"
                        style={{display:"none"}}
                        className={styles.hunger_1_cell}
                        src={"/aquarium/hunger_1_cell.svg"}
                        width={260}
                        height={40}
                        alt="hunger"
                    />
                    <Image
                        id="hunger_5_cell"
                        style={{display:"none"}}
                        className={styles.hunger_5_cell}
                        src={"/aquarium/hunger_5_cell.svg"}
                        width={260}
                        height={40}
                        alt="hunger"
                    />
                </div>
                <div className={styles.buttons_section}>
                    <button onClick={() => 
                        {tab('Fishes')
                        boopSound()
                        }} 
                        className={styles.buttons_part}
                        >Fishes</button>

                    <button onClick={() => {
                        tab('fishFood')
                        boopSound()
                    }}
                        className={styles.buttons_part}
                        >Fish Food</button>
                    <button onClick={() => {
                        boopSound()
                        tab('other')
                    }}
                    className={styles.buttons_part}
                        >Other</button>
                </div>
                <div className={styles.content}>
                    <div className={styles.aquarium_items}>
                        <Image
                            id="crab"
                            style={{display:"none"}}
                            className={styles.crab}
                            src={"/aquarium/crab.svg"}
                            width={110}
                            height={110}
                            alt="crab"
                        />
                        <Image
                            id="clownFish"
                            style={{display:"none"}}
                            className={styles.clownFish}
                            src={"/aquarium/clownfish.svg"}
                            width={70}
                            height={70}
                            alt="clown fish"
                        />
                        <Image
                            id="seaturtle"
                            style={{display:"none"}}
                            className={styles.seaturtle}
                            src={"/aquarium/seaturtle.svg"}
                            width={100}
                            height={100}
                            alt="sea turtle"
                        />  
                        <Image
                            id="moss"
                            style={{display:"none"}}
                            className={styles.moss}
                            src={"/aquarium/moss_double.svg"}
                            width={45}
                            height={35}
                            alt="moss"
                        />  
                        <Image
                            id="filter"
                            style={{display:"none"}}
                            className={styles.filter}
                            src={"/aquarium/aquariumFilter.png"}
                            width={60}
                            height={120}
                            alt="filter"
                        />  
                    </div>
                    <div id="Fishes" class="section" style={{display:"block"}} className={styles.sections}>
                        <div>
                            <Image
                                id="Fish_1_hide"
                                style={{display:"none"}}
                                className={styles.item_image_1_hide}
                                src={"/aquarium/fish1_equip.png"}
                                width={90}
                                height={90}
                                alt="equip"
                            />
                            <Image
                                className={styles.fish_image_1_absolute}
                                onClick={() => {
                                    setShowFish_1(true)
                                    popSound()
                                }}
                                src={"/aquarium/fish_1.png"}
                                width={90}
                                height={90}
                                alt="equip"
                            />
                            {showfish_1 ? (
                                <div className={styles.popup}>
                                    <Image 
                                        className={styles.background_image}
                                        src={"/boxes/crab_box.png"}
                                        width={368}
                                        height={238}
                                        alt="crab box"
                                    />
                                    <div className={styles.box_buttons}>
                                    <div onClick={() => fish_1()}>
                                            <Image 
                                                onClick={() => {
                                                    setShowFish_1(false)
                                                    waterSound()
                                                }}
                                                className={styles.buttons}
                                                src={"/buttons/yes.svg"}
                                                width={100}
                                                height={40}
                                                alt="yes"
                                            />
                                        </div>
                                        <div >
                                            <Image 
                                                onClick={() => setShowFish_1(false)}
                                                className={styles.buttons}
                                                src={"/buttons/no.svg"}
                                                width={100}
                                                height={40}
                                                alt="no"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        <div>
                            <Image
                                id="Fish_2_hide"
                                style={{display:"none"}}
                                className={styles.item_image_2_hide}
                                src={"/aquarium/fish2_equip.png"}
                                width={90}
                                height={90}
                                alt="equip"
                            />
                            <Image
                                className={styles.fish_image_2_absolute}
                                onClick={() => {
                                    setShowFish_2(true)
                                    popSound()
                                }}
                                src={"/aquarium/fish_2.png"}
                                width={90}
                                height={90}
                                alt="equip"
                            />
                            {showfish_2 ? (
                                <div className={styles.popup}>
                                    <Image 
                                        className={styles.background_image}
                                        src={"/boxes/clownfish_box.png"}
                                        width={368}
                                        height={238}
                                        alt="clown fish"
                                    />
                                    <div className={styles.box_buttons}>
                                    <div onClick={() => fish_2()}>
                                            <Image 
                                                onClick={() => {
                                                    setShowFish_2(false)
                                                    waterSound()
                                                }}
                                                className={styles.buttons}
                                                src={"/buttons/yes.svg"}
                                                width={100}
                                                height={40}
                                                alt="yes"
                                            />
                                        </div>
                                        <div >
                                            <Image 
                                                onClick={() => setShowFish_2(false)}
                                                className={styles.buttons}
                                                src={"/buttons/no.svg"}
                                                width={100}
                                                height={40}
                                                alt="no"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        <div>
                            <Image
                                id="Fish_3_hide"
                                style={{display:"none"}}
                                className={styles.item_image_3_hide}
                                src={"/aquarium/fish3_equip.png"}
                                width={90}
                                height={90}
                                alt="fish equip"
                            /> 
                            <Image
                                className={styles.fish_image_3_absolute}
                                onClick={() => {
                                    setShowFish_3(true)
                                    popSound()
                                }}
                                src={"/aquarium/fish_3.png"}
                                width={90}
                                height={90}
                                alt="fish equip"
                            />
                            {showfish_3 ? (
                                <div className={styles.popup}>
                                    <Image 
                                        className={styles.background_image}
                                        src={"/boxes/seaturtle_box.png"}
                                        width={368}
                                        height={238}
                                        alt="turtle box"
                                    />
                                    <div className={styles.box_buttons}>
                                    <div onClick={() => fish_3()}>
                                            <Image 
                                                onClick={() => {
                                                    setShowFish_3(false)
                                                    waterSound()
                                                }}
                                                className={styles.buttons}
                                                src={"/buttons/yes.svg"}
                                                width={100}
                                                height={40}
                                                alt="yes"
                                            />
                                        </div>
                                        <div >
                                            <Image 
                                                onClick={() => setShowFish_3(false)}
                                                className={styles.buttons}
                                                src={"/buttons/no.svg"}
                                                width={100}
                                                height={40}
                                                alt="no"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div id="fishFood" class="section" style={{display:"none"}} className={styles.sections}>
                        <div>
                            <Image
                                className={styles.fish_image_1_absolute}
                                onClick={() => {
                                    setShowFish_flakes(true)
                                    popSound()
                                }}
                                src={"/aquarium/fish_flakes.png"}
                                width={90}
                                height={90}
                                alt="fish flakes"
                            />
                            {showFish_flakes ? (
                                <div className={styles.popup}>
                                    <Image 
                                        className={styles.background_image}
                                        src={"/boxes/fishflakes_box.png"}
                                        width={368}
                                        height={238}
                                        alt="fish flakes"
                                    />
                                    <div className={styles.box_buttons}>
                                    <div onClick={() => fish_food()}>
                                            <Image 
                                                onClick={() => {
                                                    setShowFish_flakes(false)
                                                    waterSound()
                                                }}
                                                className={styles.buttons}
                                                src={"/buttons/yes.svg"}
                                                width={100}
                                                height={40}
                                                alt="yes"
                                            />
                                        </div>
                                        <div >
                                            <Image 
                                                onClick={() => setShowFish_flakes(false)}
                                                className={styles.buttons}
                                                src={"/buttons/no.svg"}
                                                width={100}
                                                height={40}
                                                alt="no"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        <div>
                            <Image
                                className={styles.fish_image_2_absolute}
                                onClick={() => {
                                    setShowFish_pellets(true)
                                    popSound()
                                }}
                                src={"/aquarium/fish_food.png"}
                                width={90}
                                height={90}
                                alt="fish food"
                            />
                            {showFish_pellets ? (
                                <div className={styles.popup}>
                                    <Image 
                                        className={styles.background_image}
                                        src={"/boxes/fishfood_box.png"}
                                        width={368}
                                        height={238}
                                        alt="fish food box"
                                    />
                                    <div className={styles.box_buttons}>
                                    <div onClick={() => fish_food()}>
                                            <Image 
                                                onClick={() => {
                                                    setShowFish_pellets(false)
                                                    waterSound()
                                                }}
                                                className={styles.buttons}
                                                src={"/buttons/yes.svg"}
                                                width={100}
                                                height={40}
                                                alt="yes"
                                            />
                                        </div>
                                        <div >
                                            <Image 
                                                onClick={() => setShowFish_pellets(false)}
                                                className={styles.buttons}
                                                src={"/buttons/no.svg"}
                                                width={100}
                                                height={40}
                                                alt="no"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div id="other" class="section" style={{display:"none"}} className={styles.sections}>
                        <div>
                        <Image
                            onClick={() => {
                                setShowMoss(true)
                                popSound()
                            }}
                            className={styles.fish_image_1_absolute}
                            src={"/aquarium/moss.png"}
                            width={90}
                            height={90}
                            alt="moss"
                        />
                        <Image
                            id="Other_1_hide"
                            style={{display:"none"}}
                            className={styles.item_image_1_hide}
                            src={"/aquarium/moss_equip.png"}
                            width={90}
                            height={90}
                            alt="moss equip"
                        />
                        {showMoss ? (
                                <div className={styles.popup}>
                                    <Image 
                                        className={styles.background_image}
                                        src={"/boxes/moss_box.png"}
                                        width={368}
                                        height={238}
                                        alt="moss box"
                                    />
                                    <div className={styles.box_buttons}>
                                    <div onClick={() => moss()}>
                                            <Image 
                                                onClick={() => {
                                                    setShowMoss(false)
                                                    waterSound()
                                                }}
                                                className={styles.buttons}
                                                src={"/buttons/yes.svg"}
                                                width={100}
                                                height={40}
                                                alt="yes"
                                            />
                                        </div>
                                        <div >
                                            <Image 
                                                onClick={() => setShowMoss(false)}
                                                className={styles.buttons}
                                                src={"/buttons/no.svg"}
                                                width={100}
                                                height={40}
                                                alt="no"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        <div>
                            <Image
                                id="Other_2_hide"
                                style={{display:"none"}}
                                className={styles.item_image_2_hide}
                                src={"/aquarium/filter_equip.png"}
                                width={90}
                                height={90}
                                alt="filter equip"
                            />
                             <Image
                                onClick={() => {
                                    setShowFilter(true)
                                    popSound()
                                }}
                                className={styles.fish_image_2_absolute}
                                src={"/aquarium/filter.png"}
                                width={90}
                                height={90}
                                alt="filter"
                            />
                            {showFilter ? (
                                <div className={styles.popup}>
                                    <Image 
                                        className={styles.background_image}
                                        src={"/boxes/filter_box.png"}
                                        width={368}
                                        height={238}
                                        alt="filter box"
                                    />
                                    <div className={styles.box_buttons}>
                                    <div onClick={() => filter()}>
                                            <Image 
                                                onClick={() => {
                                                    setShowFilter(false)
                                                    waterSound()
                                                }}
                                                className={styles.buttons}
                                                src={"/buttons/yes.svg"}
                                                width={100}
                                                height={40}
                                                alt="yes"
                                            />
                                        </div>
                                        <div >
                                            <Image 
                                                onClick={() => setShowFilter(false)}
                                                className={styles.buttons}
                                                src={"/buttons/no.svg"}
                                                width={100}
                                                height={40}
                                                alt="no"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}