import MemesApi from '../api/MemesApi';

const Main = () => {
  const getMemesImages = () => {
    const memesArray = MemesApi.data.memes
    const getRandomMemes =  Math.floor(Math.random() * memesArray.length)
    console.log(getRandomMemes)
  }
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <h1>Meme Generator</h1>
          <div className="form">
            <div className="form-group">
              <input className="form-input" placeholder="Enter Title"/>
              <input className="form-input" placeholder="Enter Text"/>
              <button className="form-btn" onClick={getMemesImages}>Get Meme</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Main