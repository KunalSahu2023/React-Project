import React, {useState} from 'react';
import { questions} from './Api';
import Answers from './Answers';
import './Accordians.css';

const Questions = () => {
    const [data, setData] = useState(questions);
    return (
        <>
            <div id="Questions">
            <h2> Questions Related to Harvest Tech </h2>       
        {
                data.map((curElem) => {
                    return <Answers key={curElem.id} 
                    {...curElem} />
                    
                })        
        }
            </div>
        </>
    )
}

export default Questions;
