import React, { useState } from "react";
function Event(){
    const purple = 'blue'
    const [bg, setbg] = useState(purple)
    const [name, setName]= useState('Clicked Me')
    const bgChange = ()=>{
        // console.log("clicked")
        let newbg = '#34495e';
        setbg(newbg)
        setName('Out😍')
        
        
    }
    const bgback= ()=>{
        setbg(purple)
        setName('Clicked Me❤️')

    };
    return(
        
        <>
        <div style = {{backgroundColor:bg}}>
         <button onClick={bgChange} onDoubleClick={bgback}>{name} </button>
         </div>
        </>
    );
}
export default Event;