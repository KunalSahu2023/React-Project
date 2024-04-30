import React, {useState} from 'react';
import './Accordians.css';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Answers = ({ question, answer }) => {
    const [show, setShow] = useState(false);
    return (
        <>
           <div className="main-heading">
                <h3>{question}</h3>
                <p onClick={() => setShow(!show)}> { show? <FaMinus /> : <FaPlus /> } </p>
                   
            </div>
            { show &&  <p className="answers"> {answer} </p> }
         
        </>
    )
}

export default Answers;
