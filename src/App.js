import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let str = "There was once a velveteen rabbit, and in the beginning he was really splendid. He was fat and bunchy, as a rabbit should be; his coat was spotted brown and white, he had real thread whiskers, and his ears were lined with pink sateen. On Christmas morning, when he sat wedged in the top of the Boy’s stocking, with a sprig of holly between his paws, the effect was charming. There were other things in the stocking, nuts and oranges and a toy engine, and chocolate almonds and a clockwork mouse, but the Rabbit was quite the best of all. For at least two hours the Boy loved him, and then Aunts and Uncles came to dinner, and there was a great rustling of tissue paper and unwrapping of parcels, and in the excitement of looking at all the new presents the Velveteen Rabbit was forgotten."
  let list = str.split(" ")
  let [f, setF] = useState(false)
  let [ff, setFf] = useState(false)
  let [iid, setIid] = useState()
  let [score, setScore] = useState(0)
  let [newstr, setStr] = useState("")
  let check = (e) => {
    setStr(e.target.value)
  }
  let [timer, setTimer] = useState(60)
  let startTimer = () => {
    // if (timer!=0){
    setTimer((timer) => timer - 1)
    // }
    // else{
    //   setF(false)
    // }
  }
  let start = () => {
    setF(true)
    setFf(false)
  }
  useEffect(() => {
    if (f) {
      setIid(setInterval(startTimer, 1000))
    }
    else {
      clearInterval(iid)
    }
  }, [f])
  useEffect(() => {
    if (timer == 0) {
      setF(false)
      setFf(true)
    }
  }, [timer])
  useEffect(() => {
    let strList = newstr.split(" ")
    // console.log(strList,newstr)
    let scr = 0
    for (let i = 0; i < strList.length; i++) {
      if (list[i] == strList[i]) {
        scr++
      }
    }
    setScore(scr)
    // console.log(scr,score)
    setStr("")
    setTimer(60)
  }, [ff])


  return (
    <div className="App">
      <h1>..Speed Type..</h1>
      <div className='text'>{str}</div>
      <div className='test'>
        <div>{timer} sec</div>
        <input type='text' onChange={check} value={newstr} />
        <button onClick={start}>start</button>
      </div>
      {
        ff &&
        <div className='score'>score: {score} Wpm</div>
      }
    </div>
  );
}

export default App;
