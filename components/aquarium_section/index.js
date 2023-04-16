import Image from "next/image";
import styles from "./aquarium_section.module.css"

export default function aquariumSection() {

    // switch between sections
    const tab = (content) => {
        var x;
        x = document.getElementsByClassName("section");
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(content).style.display = "block";
    }

    // fish_1 image switch
    const fish_1 = (fish_1_image) => {
        var y;
        y = document.getElementsByClassName("fish_1");
        for (let i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        } 
        document.getElementById(fish_1_image).style.display = "block";

        const crab = document.getElementById("crab");
        crab.style.display = 'block';

        const hunger_1_cell = document.getElementById("hunger_1_cell");
        hunger_1_cell.style.display = 'block';
    }

    // fish_2 image switch
    const fish_2 = (fish_2_image) => {
        var z;
        z = document.getElementsByClassName("fish_2");
        for (let i = 0; i < z.length; i++) {
            z[i].style.display = "none";
        } 
        document.getElementById(fish_2_image).style.display = "block";

        const clownFish = document.getElementById("clownFish");
        clownFish.style.display = 'block';

        const hunger_1_cell = document.getElementById("hunger_1_cell");
        hunger_1_cell.style.display = 'block';
    }

    // fish_3 image switch
    const fish_3 = (fish_3_image) => {
        var a;
        a = document.getElementsByClassName("fish_3");
        for (let i = 0; i < a.length; i++) {
            a[i].style.display = "none";
        } 
        document.getElementById(fish_3_image).style.display = "block";

        const seaturtle = document.getElementById("seaturtle");
        seaturtle.style.display = 'block';

        const hunger_1_cell = document.getElementById("hunger_1_cell");
        hunger_1_cell.style.display = 'block';
    }

    // fish_flakes image switch
    const fishfood_1 = (fishfood_1_image) => {
        var b;
        b = document.getElementsByClassName("fishfood_1");
        for (let i = 0; i < b.length; i++) {
            b[i].style.display = "none";
        } 
        document.getElementById(fishfood_1_image).style.display = "block";

        const fish_flakes = document.getElementById("fish_flakes");
        fish_flakes.style.display = 'block';

        const hunger_5_cell = document.getElementById("hunger_5_cell");
        hunger_5_cell.style.display = 'block';
    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.hunger}>
                    <Image
                        src={"/aquarium/hunger_0_cell.svg"}
                        width={260}
                        height={40}
                    />
                    <Image
                        id="hunger_1_cell"
                        style={{display:"none"}}
                        className={styles.hunger_1_cell}
                        src={"/aquarium/hunger_1_cell.svg"}
                        width={260}
                        height={40}
                    />
                </div>
                <div className={styles.buttons_section}>
                    <button onClick={() => tab('Fishes')} className={styles.buttons_part}>Fishes</button>
                    <button onClick={() => tab('fishFood')} className={styles.buttons_part}>Fish Food</button>
                    <button onClick={() => tab('other')} className={styles.buttons_part}>Other</button>
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
                        />
                        <Image
                            id="clownFish"
                            style={{display:"none"}}
                            className={styles.clownFish}
                            src={"/aquarium/clownfish.svg"}
                            width={70}
                            height={70}
                        />
                        <Image
                            id="seaturtle"
                            style={{display:"none"}}
                            className={styles.seaturtle}
                            src={"/aquarium/seaturtle.svg"}
                            width={100}
                            height={100}
                        />
                        
                    </div>
                    <div id="Fishes" class="section" style={{display:"block"}} className={styles.sections}>
                        <Image
                            id="Fish_1_hide"
                            style={{display:"none"}}
                            className={styles.item_image_1_hide}
                            src={"/aquarium/no_fish_1.svg"}
                            width={100}
                            height={100}
                        />
                        <Image
                            id="Fish_1"
                            onClick={() => fish_1('Fish_1_hide')}
                            className={styles.item_image}
                            src={"/aquarium/fish_1.svg"}
                            width={100}
                            height={100}
                        />
                        <Image
                            id="Fish_2_hide"
                            style={{display:"none"}}
                            className={styles.item_image_2_hide}
                            src={"/aquarium/no_fish_2.svg"}
                            width={100}
                            height={100}
                        />
                        <Image
                            id="Fish_2"
                            onClick={() => fish_2('Fish_2_hide')}
                            className={styles.item_image}
                            src={"/aquarium/fish_2.svg"}
                            width={100}
                            height={100}
                        />
                        <Image
                            id="Fish_3_hide"
                            style={{display:"none"}}
                            className={styles.item_image_3_hide}
                            src={"/aquarium/no_fish_3.svg"}
                            width={100}
                            height={100}
                        /> 
                        <Image
                            className={styles.item_image}
                            onClick={() => fish_3('Fish_3_hide')}
                            src={"/aquarium/fish_3.svg"}
                            width={100}
                            height={100}
                        />
                    </div>
                    <div id="fishFood" class="section" style={{display:"none"}} className={styles.sections}>
                        <Image
                            className={styles.item_image}
                            src={"/aquarium/fish_flakes.svg"}
                            width={100}
                            height={100}
                        />
                        <Image
                            className={styles.item_image}
                            src={"/aquarium/fish_food.svg"}
                            width={100}
                            height={100}
                        />
                    </div>
                    <div id="other" class="section" style={{display:"none"}} className={styles.sections}>
                        <Image
                            className={styles.item_image}
                            src={"/aquarium/moss.svg"}
                            width={100}
                            height={100}
                        />
                        <Image
                            className={styles.item_image}
                            src={"/aquarium/filter.svg"}
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}