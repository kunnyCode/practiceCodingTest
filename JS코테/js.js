import React, {useState} from "react";

// Halloween 컴포넌트를 구현하세요.
function Halloween() {
  const [emoji, setEmoji] = useState("")

  function handleEmoji(e){
    if(e.target.value === 'Treat'){
      setEmoji('🍬🍭🍫')
    }else if(e.target.value === 'Trick'){
      setEmoji('😛😛😛') 
    }
  }

  return (
		<>
			<h1>Treat or Trick?</h1>
			<button onClick={handleEmoji} value="Treat">Treat</button>
			<button onClick={handleEmoji} value="Trick">Trick</button>
			<p>{emoji}</p>
		</>
	)
  
}


export default Halloween;
