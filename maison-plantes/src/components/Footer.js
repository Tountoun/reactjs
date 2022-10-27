import { useState } from 'react';
import '../styles/Footer.css';

function Footer() {
	const [email, setEmail] = useState('')
    const [enabled, setEnabled] = useState(false);

    function handleChange(e) {
        setEmail(e.target.value);
        if(email.includes('@')) {
            setEnabled(true);
        }else {
            setEnabled(false);
        }
    }
    function handleSubmit() {
        alert('Votre email est ' + email);
        setEmail('');
    }
    function handleBlur() {
        if (!email.includes('@')){
        }
    }
    
	return (
		<footer className='th-footer'>
			<div className='th-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='th-footer-elem'>Laissez-nous votre mail :
                <input type='email' value={email}
                onChange={(e) => handleChange(e)}
                onBlur={handleBlur}
                placeholder='softwaredev@gmail.com'/>
                { enabled && <button onClick={handleSubmit} >Envoyer</button>}
            </div>
		</footer>
	)
}


export default Footer;