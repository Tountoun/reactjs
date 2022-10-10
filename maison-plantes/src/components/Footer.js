import { useState } from 'react';
import '../styles/Footer.css';

function Footer() {
	const [inputValue, setInputValue] = useState('')
    
    function handleInput(e) {
        setInputValue(e.target.value);
    }

    function handleBlur() {
        if (!inputValue.includes('@')){
            alert("Il n'y a pas d'@ dans votre email");
        }
    }
    
	return (
		<footer className='th-footer'>
			<div className='th-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='th-footer-elem'>Laissez-nous votre mail :
                <input type='email' value={inputValue}
                onChange={(e) => handleInput(e)}
                onBlur={handleBlur}/>
                <button>Envoyer</button>
            </div>
		</footer>
	)
}


export default Footer;