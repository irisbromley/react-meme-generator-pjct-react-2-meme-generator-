import { useEffect, useState } from 'react';

// template for the generated meme(s)
function ImagePreview(props) {
  console.log(props);
  const style = {
    width: '350px',
    paddingTop: '20px',
  };
  return (
    <img
      style={style}
      data-test-id="meme-image"
      alt="meme template"
      src={props.imageUrl}
    />
  );
}

export default function App() {
  const [textT, setTextT] = useState('');
  const [textB, setTextB] = useState('');

  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch('https://api.memegen.link/templates')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        return result;
      })
      .then((listOfObjects) => {
        setImageUrl(listOfObjects[0].blank);
      })
      .catch((error) => {
        console.log(error);
      });
    // pass an empty array as a second argument so useEffect only runs once
  }, []);

  return (
    <>
      <div>
        <h1>React Meme Generator</h1>

        <div style={{ display: 'flex' }} className="topText">
          <label htmlFor="Top text">Top Text: </label>
          <input
            style={{ marginLeft: 'auto', marginBottom: '10px' }}
            value={textT}
            onChange={(event) => {
              const topText = textT;
              setTextT(event.currentTarget.value);
              console.log('topText input', event.currentTarget.value);
            }}
            name="Top text"
          />
        </div>
        <div style={{ display: 'flex' }} className="bottomText">
          <label htmlFor="Bottom text">Bottom Text: </label>
          <input
            style={{ marginLeft: 'auto', marginBottom: '10px' }}
            value={textB}
            onChange={(event) => {
              const bottomText = setTextB(event.currentTarget.value);
              console.log('bottomText input', event.currentTarget.value);
            }}
            name="Bottom text"
          />
        </div>

        <div style={{ display: 'flex' }}>
          <label htmlFor="Meme template">Search for an image: </label>
          <input
            style={{ marginLeft: 'auto' }}
            value={textB}
            onChange={(event) => {
              const bottomText = setTextB(event.currentTarget.value);
              console.log(
                'Meme template search input',
                event.currentTarget.value,
              );
            }}
            name="Bottom text"
          />
        </div>

        <ImagePreview imageUrl={imageUrl} />
        <div style={{ display: 'flex' }}>
          <button style={{ marginLeft: 'auto' }}>Download</button>
        </div>
      </div>
      <div />
    </>
  );
}
