import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleSpaceClick=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleClearText=()=>{
        setText("");
        };
    const handleReverseClick = () => {
            
              let splitString = text.split(""); 
              let reverseArray = splitString.reverse(); 
              let joinArray = reverseArray.join(""); 
              setText(joinArray);
    }
    const handleCapitalizeFirstLetter = () => {
        let newText = text.toLowerCase().split(' ');
        for (let i = 0; i < newText.length; i++) {
           newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].substring(1);
        }
        setText(newText.join(' '));
    }

    const handleDuplicate=()=>{
        let wordArr = text.split(" ");
        let newText = wordArr.filter((item, pos)=>{
            return wordArr.indexOf(item) === pos;
        })
        newText = newText.join(" ");
        setText(newText);
    }
    const handleCopy=()=>{
      navigator.clipboard.writeText(text);

    }
    const handleChange =(event)=>{
        setText(event.target.value);
    }
    
    const [text,setText]=useState("");
    return (
        <>
        <div className="container" style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white',color: props.mode=== 'dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
        <button className="btn btn-dark mx-1" onClick={handleUpClick}> Change your text to uppercase</button>
        <button className="btn btn-dark mx-1" onClick={handleLowClick}> Change your text to lowercase</button>
        <button className="btn btn-dark mx-1" onClick={handleSpaceClick}> Remove extra spaces</button>
        <button className="btn btn-dark mx-1" onClick={handleReverseClick}> Reverse your text</button>
        <button className="btn btn-dark mx-1 my-1" onClick={handleCapitalizeFirstLetter}>Capitilize the first charactor of each word </button>
        <button className="btn btn-dark mx-1 my-1" onClick={handleDuplicate}> Remove Duplicates</button>
        <button className="btn btn-dark mx-1 my-1" onClick={handleCopy}> Copy text</button>
        <button className="btn btn-dark mx-1 my-1" onClick={handleClearText}> Clear text</button>
        <div className="container" style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.length>0 ? text.trim().split(/[ ]+/).length : 0} words and {text.length} charactors</p>
            <p> Time to read: {text.length>0 ? 0.008*text.split(' ').length:0} minutes</p>
        </div>
        </div>
        </>
    )
}
