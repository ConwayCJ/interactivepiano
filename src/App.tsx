import './App.css'
//import { useState } from 'react';


function App() {

  const allKeys = [
    {
      white: true,
      note: "a",
    }, {
      white: false,
      note: "as",
    },
    {
      white: true,
      note: "b",
    },
    {
      white: true,
      note: "c",
    },
    {
      white: false,
      note: "cs",
    },
    {
      white: true,
      note: "d",
    },
    {
      white: false,
      note: "ds",
    },
    {
      white: true,
      note: "e",
    },
    {
      white: true,
      note: "f",
    },
    {
      white: false,
      note: "fs",
    },
    {
      white: true,
      note: "g",
    },
    {
      white: false,
      note: "gs",
    }, {
      white: true,
      note: "a",
    }, {
      white: false,
      note: "as",
    }, {
      white: true,
      note: "b",
    },
    {
      white: true,
      note: "c",
    },
    {
      white: false,
      note: "cs",
    },
    {
      white: true,
      note: "d",
    },
    {
      white: false,
      note: "ds",
    },
    {
      white: true,
      note: "e",
    },
    {
      white: true,
      note: "f",
    },
    {
      white: false,
      note: "fs",
    },
    {
      white: true,
      note: "g",
    },
    {
      white: false,
      note: "gs",
    }, {
      white: true,
      note: "a",
    }, {
      white: false,
      note: "as",
    }, {
      white: true,
      note: "b",
    },
    {
      white: true,
      note: "c",
    },
    {
      white: false,
      note: "cs",
    },
    {
      white: true,
      note: "d",
    },
    {
      white: false,
      note: "ds",
    },
    {
      white: true,
      note: "e",
    },
    {
      white: true,
      note: "f",
    },
    {
      white: false,
      note: "fs",
    },
    {
      white: true,
      note: "g",
    },
    {
      white: false,
      note: "gs",
    }, {
      white: true,
      note: "a",
    }, {
      white: false,
      note: "as",
    }, {
      white: true,
      note: "b",
    },
    {
      white: true,
      note: "c",
    },
    {
      white: false,
      note: "cs",
    },
    {
      white: true,
      note: "d",
    },
    {
      white: false,
      note: "ds",
    },
    {
      white: true,
      note: "e",
    },
    {
      white: true,
      note: "f",
    },
    {
      white: false,
      note: "fs",
    },
    {
      white: true,
      note: "g",
    },
    {
      white: false,
      note: "gs",
    }, {
      white: true,
      note: "a",
    }, {
      white: false,
      note: "as",
    }, {
      white: true,
      note: "b",
    },
    {
      white: true,
      note: "c",
    },
    {
      white: false,
      note: "cs",
    },
    {
      white: true,
      note: "d",
    },
    {
      white: false,
      note: "ds",
    },
    {
      white: true,
      note: "e",
    },
    {
      white: true,
      note: "f",
    },
    {
      white: false,
      note: "fs",
    },
    {
      white: true,
      note: "g",
    },
    {
      white: false,
      note: "gs",
    }, {
      white: true,
      note: "a",
    }];

  const keys = allKeys.slice(27, (56))

  // These variables will be used to allow users the ability
  // to create varying sizes of pianos 

  // const [startingNote, setStartingNote] = useState(1);
  // const [endingNote, setEndingNote] = useState(88)

  // const userKeys = keys.slice(startingNote, endingNote)
  // const firstNote = "https://cdn.freesound.org/previews/39/39148_35187-lq.mp3"

  /**
   * @param {number} noteNumber 
   * 
   * @description this is a function that plays a note from the given CDN
   * firstnote: https://cdn.freesound.org/previews/39/39148_35187-lq.mp3
   * 
   * 
   */

  function playNote(noteNumber) {
    console.log(noteNumber)
    //startingNote - target the first note from the CDN
    const startingNote = noteNumber + 147 + 27
    //39199 works, going to 391100 prob
    const audio = new Audio(`https://cdn.freesound.org/previews/39/39${startingNote}_35187-lq.mp3`)
    console.log(audio)
    audio.play()
  }

  return (

    <ul className="set">

      {keys.map((key, index) => {
        // Handles broken CDN, plays note instead
        if (index + 48 + 27 == 92) {
          return (
            <li
              key={index}
              className={`white f`}
              onClick={() => {
                const audio = new Audio('the_lick.mp3')

                audio.play()
              }}

            ></li>
          )
        }
        // Rest of the keys
        if (key.white) {
          return (
            <li
              key={index}
              className={`white ${key.note}`}
              onClick={() => playNote(index + 1)}
            ></li>
          )

        } else {
          return (
            <li
              key={index}
              className={`black ${key.note}`}
              onClick={() => playNote(index + 1)}
            ></li>
          )
        }
      })}

    </ul>
  )
}

export default App
