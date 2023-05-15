import { useState } from "react";

const tutorialShow = () => {
    const [gameTutorial, setGameTutorial] = useState(false);

    return{gameTutorial, setGameTutorial};
}

export default tutorialShow;