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
				Fermer le panier
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Mon panier</h2>
					<ul>
						{cart.map(({ name, amount }, index) => (
							<li key={`${name}-${index}`}>
								{amount} {name.charAt(0).toUpperCase() + name.slice(1, )}
							</li>
						))}
					</ul>
					<h3>Total :{total} €</h3>
					<button onClick={() => updateCart([])} className="flush-cart">Vider le panier</button>
				</div>
			) : (
				<div className='empty-cart'>Votre panier est vide</div>
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