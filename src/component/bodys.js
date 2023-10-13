import React, { useState } from 'react'

export default function Body() {
    const [text,setText] = useState('');
    const [words,setWords] = useState(0);
    
    const handle = (e) => {
        const newText = e.target.value.split(" ");
        setText(e.target.value);
        setWords(newText.length);
    }

  return (
    <div>
        <div className='con'>
        <h2>Responsive Paragraph Word Counter</h2>
        <textarea className='box' value={text} onChange={(e)=>handle(e)}  id='data'></textarea>
        <p>Word Count : {words}</p>
        </div>
    </div>
  )
}

