import { plantList } from '../datas/plantList';
import PlantItem from './PlantItem';
import '../styles/ShoppingList.css';
import Categories from './Categories';


function ShoppingList({cart, updateCart, activeCategory, setActiveCategory}) {
      // Creating an array of unique categories from the plant array of objects
      const categories = plantList.reduce(
            (acc, cur) =>
                  acc.includes(cur.category) ? acc : acc.concat(cur.category),
            []
      );
      
      function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name);
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

      function removeFromCart(name) {
            const currentPlantSaved = cart.find((plant) => plant.name === name);

            if (currentPlantSaved) {
                  const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			);
                  updateCart([...cartFilteredCurrentPlant]);
            }
      }

      return (
            <div className='th-shopping-list'>
                  <Categories
                        activeCategory={activeCategory}
				setActiveCategory={setActiveCategory}
                        categories={categories}
			/>
                  <ul className='th-plant-list'>
                        {plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
                                    <div key={id}>
                                           <PlantItem
                                                id={id}
                                                cover={cover}
                                                name={name}
                                                water={water}
                                                light={light}
                                                price={price}
                                          />
                                          <div className='th-plant-btn'>
                                                <button className='btn-add' onClick={() => addToCart(name, price)}>Ajouter</button>
                                                <button className='btn-remove' onClick={() => removeFromCart(name)}>Supprimer</button>
                                          </div>
                                    </div>
                              ) : null
                        )}
                  </ul>
            </div>
      );
}

export default ShoppingList;