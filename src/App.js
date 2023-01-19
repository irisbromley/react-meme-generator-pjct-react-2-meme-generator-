import './App.css';
import { useState } from 'react';

export default function App() {
  const [textT, setTextT] = useState('');
  const [textB, setTextB] = useState('');
  return (
    <>
      <div>
        <h1>React Meme Generator</h1>

        <div className="topText">
          <label htmlFor="Top text" placeholder="What should it say here?">
            <input
              value={textT}
              onChange={(event) => {
                const topText = setTextT(event.currentTarget.value);
                console.log('topText input', textT);
              }}
              name="Top text"
            />
          </label>
        </div>
        <div className="memePic">Here goes the meme</div>

        <div className="bottomText">
          <label htmlFor="Bottom text" placeholder="Do you like peas?">
            <input
              value={textB}
              onChange={(event) => {
                const bottomText = setTextB(event.currentTarget.value);
                console.log('bottomText input', textB);
              }}
              name="Bottom text"
            />
          </label>
        </div>
        <button>Download</button>
      </div>
      <div />
    </>
  );
}
