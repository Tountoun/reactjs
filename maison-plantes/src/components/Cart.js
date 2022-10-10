import '../styles/Cart.css';
import { useState } from 'react';


function Cart({cart, updateCart}) {
	
    const [isOpen, setIsOpen] = useState(false);

	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	);

    return isOpen ? (
        <div className='th-cart'>
            <button
				className='th-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				<h3>Fermer</h3>
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total} €</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
    ) : (
		<div className='th-cart-closed'>
			<button
				className='th-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	);
}

export default Cart;