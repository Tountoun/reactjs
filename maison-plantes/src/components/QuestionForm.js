import { useState } from 'react';

function QuestionForm(){
    const [inputValue, setInputValue] = useState('Posez votre question ici');

    return (
        <div>
            <textarea 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alert Me</button>
        </div>
    )
}

export default QuestionForm;