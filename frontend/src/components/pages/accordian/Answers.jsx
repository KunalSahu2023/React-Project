import React, {useState} from 'react';
import './Accordians.css';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Answers = ({ question, answer }) => {
    const [show, setShow] = useState(false);
    return (
        <>
           <div className='main-div'>
          <button  className ='questions-btn' onClick={() => setShow(!show)}>
               <h3>{question}</h3>
                <p onClick={() => setShow(!show)}> { show? <FaMinus />: <FaPlus/> } </p>
                </button>
                <div className="answer">
                { show &&  <p>{answer}</p>}
                </div>
           
          </div>
         
        </>
    )
}

export default Answers;
