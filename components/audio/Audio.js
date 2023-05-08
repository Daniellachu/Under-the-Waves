const { useRef, useEffect } = require("react");
const { useStore } = require("../contexts/StoreContext");

function Audio({ play, src }) {
  const { store } = useStore();
  const audioRef = useRef();
  useEffect(() => {
    // write our code to update the volume based on the setting
    if (audioRef.current) {
      audioRef.current.volume = store.settings.audio;
    }
  }, [store.settings.audio]);
  useEffect(() => {
    // write our code to update the volume based on the setting
    if (audioRef.current && play) {
      audioRef.current.currentTime = 0; // resets the sound so it will play from the beginning
      audioRef.current.play();
    } else if (audioRef.current && play == false) {
      audioRef.current.currentTime = 0; // resets the sound so it will play from the beginning
      audioRef.current.pause();
    }
  }, [play]);
  return <audio src={src} ref={audioRef} />;
}


//  EXAMPLE - Quiz Page

// const [playAnswerSound, setPlayAnswerSound] = useState(false) // use state to control when you want to play a sound

// reset function so as the quiz moves from one question to the next we reset the sounds
// function resetSounds() {
//     setPlayAnswerSound(false)
// }


// function selectAnswer(answer) {
//     ...other code for updating the quiz
//     // if the correct answer was chosen
//     setPlayAnswerSound(true)
// }

// <button>Answer 1</button>
// <Audio src={'path/to/sound.mp3'} play={playAnswerSound} />






