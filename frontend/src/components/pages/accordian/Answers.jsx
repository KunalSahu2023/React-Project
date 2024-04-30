import React, {useState} from 'react';
import './Accordians.css';

const Answers = ({ question, answer }) => {
    const [show, setShow] = useState(false);
    return (
        <>
           <div className="main-heading">
                <h3>{question}</h3>
                <p onClick={() => setShow(!show)}> { show? "➖" : "➕"} </p>
                   
            </div>
            { show &&  <p className="answers"> {answer} </p> }
         
        </>
    )
}

export default Answers;
