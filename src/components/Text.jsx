import { useState } from 'react';


function Text(){
    const [text, setText] = useState([]);
    const [input, setInput] = useState("")

    function addText(){
        if (input === "") return;

        setText([...text, input]);
        setInput("");
    }
    
    

return (
    <>
        <input value = {input} onChange={(e)=>{setInput(e.target.value)}}></input>

        <button onClick={addText}>Add</button>

        <ul>
            {text.map((t,index)=>{return <li key={index}>{t}</li>})}
        </ul>
    </>
)

}
export default Text;