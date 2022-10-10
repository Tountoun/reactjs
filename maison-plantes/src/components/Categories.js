import '../styles/Categories.css';

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='th-categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='th-categories-select'
			>
				<option value=''>Tout</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories;