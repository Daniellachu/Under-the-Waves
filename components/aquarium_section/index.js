import Image from "next/image";
import styles from "./aquarium_section.module.css"
import { useState } from 'react'

export default function aquariumSection() {

    //popup confirmation
    const [popup_1, setPopup_1] = useState(true);
    const [popup_2, setPopup_2] = useState(true);
    const [popup_3, setPopup_3] = useState(true);
    const [popup_4, setPopup_4] = useState(true);
    const [popup_5, setPopup_5] = useState(true);
    const [popup_6, setPopup_6] = useState(true);
    const [popup_7, setPopup_7] = useState(true);

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

    // fish_flakes and fish_food switch

    const fish_food = () => {
        const hunger_5_cell = document.getElementById("hunger_5_cell");
        hunger_5_cell.style.display = 'block';
    }

    // moss image switch
    const moss = (moss_image) => {
        var b;
        b = document.getElementsByClassName("moss");
        for (let i = 0; i < b.length; i++) {
            b[i].style.display = "none";
        } 
        document.getElementById(moss_image).style.display = "block";

        const moss = document.getElementById("moss");
        moss.style.display = 'block';
    }

    // filter image switch
    const filter = (filter_image) => {
        var c;
        c = document.getElementsByClassName("filter");
        for (let i = 0; i < c.length; i++) {
            c[i].style.display = "none";
        } 
        document.getElementById(filter_image).style.display = "block";

        const filter = document.getElementById("filter");
        filter.style.display = 'block';
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
                    <Image
                        id="hunger_5_cell"
                        style={{display:"none"}}
                        className={styles.hunger_5_cell}
                        src={"/aquarium/hunger_5_cell.svg"}
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
                        <Image
                            id="moss"
                            style={{display:"none"}}
                            className={styles.moss}
                            src={"/aquarium/moss_item.svg"}
                            width={30}
                            height={30}
                        />  
                        <Image
                            id="filter"
                            style={{display:"none"}}
                            className={styles.filter}
                            src={"/aquarium/filter_item.svg"}
                            width={60}
                            height={150}
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
                    {
                        popup_1 ?
                            <div onClick={() => setPopup_1(false)} className={styles.fish_image_1_absolute}>
                                <Image
                                    id="Fish_1"
                                    src={"/aquarium/fish_1.svg"}
                                    width={100}
                                    height={100}
                                />
                            </div>
                            : 
                            <div className={styles.popup}>
                                <Image 
                                    className={styles.background_image}
                                    src={"/boxes/crab_box.png"}
                                    width={368}
                                    height={238}
                                />
                                <div className={styles.box_buttons}>
                                    <div onClick={() => setPopup_1(true)}>
                                        <Image 
                                            onClick={() => fish_1('Fish_1_hide')}
                                            className={styles.buttons}
                                            src={"/buttons/yes.svg"}
                                            width={100}
                                            height={40}
                                        />
                                    </div>
                                    <div onClick={() => setPopup_1(true)}>
                                        <Image 
                                            className={styles.buttons}
                                            src={"/buttons/no.svg"}
                                            width={100}
                                            height={40}
                                        />
                                    </div>
                                </div>
                            </div>
                    }
                    {
                        popup_2 ?
                            <div onClick={() => setPopup_2(false)} className={styles.fish_image_2_absolute}>
                                <Image
                                    id="Fish_2"
                                    src={"/aquarium/fish_2.svg"}
                                    width={100}
                                    height={100}
                                />
                            </div>
                            : 
                            <div className={styles.popup}>
                                <Image 
                                    className={styles.background_image}
                                    src={"/boxes/clownfish_box.png"}
                                    width={368}
                                    height={238}
                                />
                                <div className={styles.box_buttons}>
                                    <div onClick={() => setPopup_2(true)}>
                                        <Image 
                                            onClick={() => fish_2('Fish_2_hide')}
                                            className={styles.buttons}
                                            src={"/buttons/yes.svg"}
                                            width={100}
                                            height={40}
                                        />
                                    </div>
                                    <div onClick={() => setPopup_2(true)}>
                                        <Image 
                                            className={styles.buttons}
                                            src={"/buttons/no.svg"}
                                            width={100}
                                            height={40}
                                        />
                                    </div>
                                </div>
                            </div>
                    }
                        <Image
                            id="Fish_2_hide"
                            style={{display:"none"}}
                            className={styles.item_image_2_hide}
                            src={"/aquarium/no_fish_2.svg"}
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
                    {
                        popup_3 ?
                            <div onClick={() => setPopup_3(false)} className={styles.fish_image_3_absolute}>
                                <Image
                                    id="Fish_3"
                                    src={"/aquarium/fish_3.svg"}
                                    width={100}
                                    height={100}
                                />
                            </div>
                            : 
                            <div className={styles.popup}>
                                <Image 
                                    className={styles.background_image}
                                    src={"/boxes/seaturtle_box.png"}
                                    width={368}
                                    height={238}
                                />
                                <div className={styles.box_buttons}>
                                    <div onClick={() => setPopup_3(true)}>
                                        <Image 
                                            onClick={() => fish_3('Fish_3_hide')}
                                            className={styles.buttons}
                                            src={"/buttons/yes.svg"}
                                            width={100}
                                            height={40}
                                        />
                                    </div>
                                    <div onClick={() => setPopup_3(true)}>
                                        <Image 
                                            className={styles.buttons}
                                            src={"/buttons/no.svg"}
                                            width={100}
                                            height={40}
                                        />
                                    </div>
                                </div>
                            </div>
                    }
                    </div>
                    <div id="fishFood" class="section" style={{display:"none"}} className={styles.sections}>
                        {
                            popup_4 ?
                                <div onClick={() => setPopup_4(false)} className={styles.fish_image_1_absolute}>
                                    <Image
                                        className={styles.item_image}
                                        src={"/aquarium/fish_flakes.svg"}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                : 
                                <div className={styles.popup}>
                                    <Image 
                                        className={styles.background_image}
                                        src={"/boxes/fishflakes_box.png"}
                                        width={368}
                                        height={238}
                                    />
                                    <div className={styles.box_buttons}>
                                        <div onClick={() => setPopup_4(true)}>
                                            <Image 
                                                onClick={() => fish_food('hunger_5_cell')}
                                                className={styles.buttons}
                                                src={"/buttons/yes.svg"}
                                                width={100}
                                                height={40}
                                            />
                                        </div>
                                        <div onClick={() => setPopup_4(true)}>
                                            <Image 
                                                className={styles.buttons}
                                                src={"/buttons/no.svg"}
                                                width={100}
                                                height={40}
                                            />
                                        </div>
                                    </div>
                                </div>
                        }
                        {
                            popup_5 ?
                                <div onClick={() => setPopup_5(false)} className={styles.fish_image_2_absolute}>
                                    <Image
                                        className={styles.item_image}
                                        src={"/aquarium/fish_food.svg"}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                : 
                                <div className={styles.popup}>
                                    <Image 
                                        className={styles.background_image}
                                        src={"/boxes/fishfood_box.png"}
                                        width={368}
                                        height={238}
                                    />
                                        <div className={styles.box_buttons}>
                                            <div onClick={() => setPopup_5(true)}>
                                                <Image 
                                                    onClick={() => fish_food('hunger_5_cell')}
                                                    className={styles.buttons}
                                                    src={"/buttons/yes.svg"}
                                                    width={100}
                                                    height={40}
                                                />
                                            </div>
                                            <div onClick={() => setPopup_5(true)}>
                                                <Image 
                                                    className={styles.buttons}
                                                    src={"/buttons/no.svg"}
                                                    width={100}
                                                    height={40}
                                                />
                                            </div>
                                        </div>
                                </div>
                        }
                    </div>
                    <div id="other" class="section" style={{display:"none"}} className={styles.sections}>
                        <Image
                            id="Other_1_hide"
                            style={{display:"none"}}
                            className={styles.item_image_1_hide}
                            src={"/aquarium/no_moss.svg"}
                            width={100}
                            height={100}
                        />
                        {
                            popup_6 ?
                                <div onClick={() => setPopup_6(false)} className={styles.fish_image_1_absolute}>
                                    <Image
                                        className={styles.item_image}
                                        src={"/aquarium/moss.svg"}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                : 
                                <div className={styles.popup}>
                                    <Image 
                                        className={styles.background_image}
                                        src={"/boxes/moss_box.png"}
                                        width={368}
                                        height={238}
                                    />
                                    <div className={styles.box_buttons}>
                                        <div onClick={() => setPopup_6(true)}>
                                            <Image 
                                                onClick={() => moss('Other_1_hide')}
                                                className={styles.buttons}
                                                src={"/buttons/yes.svg"}
                                                width={100}
                                                height={40}
                                            />
                                        </div>
                                        <div onClick={() => setPopup_6(true)}>
                                            <Image 
                                                className={styles.buttons}
                                                src={"/buttons/no.svg"}
                                                width={100}
                                                height={40}
                                            />
                                        </div>
                                    </div>
                                </div>
                        }
                        <Image
                            id="Other_2_hide"
                            style={{display:"none"}}
                            className={styles.item_image_2_hide}
                            src={"/aquarium/no_filter.svg"}
                            width={100}
                            height={100}
                        />
                        {
                            popup_7 ?
                                <div onClick={() => setPopup_7(false)} className={styles.fish_image_2_absolute}>
                                    <Image
                                        className={styles.item_image}
                                        src={"/aquarium/filter.svg"}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                : 
                                <div className={styles.popup}>
                                    <Image 
                                        className={styles.background_image}
                                        src={"/boxes/filter_box.png"}
                                        width={368}
                                        height={238}
                                    />
                                    <div className={styles.box_buttons}>
                                        <div onClick={() => setPopup_7(true)}>
                                            <Image 
                                                onClick={() => filter('Other_2_hide')}
                                                className={styles.buttons}
                                                src={"/buttons/yes.svg"}
                                                width={100}
                                                height={40}
                                            />
                                        </div>
                                        <div onClick={() => setPopup_7(true)}>
                                            <Image 
                                                className={styles.buttons}
                                                src={"/buttons/no.svg"}
                                                width={100}
                                                height={40}
                                            />
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}