import '../styles/PlantItem.css';
import CareScale from './CareScale';

function PlantItem({ id, name, cover, water, light, price }) {
      return (
            <li key={id} className='th-plant-item'>
                  <div className='img-container'>
                        <img src={cover} alt={`${name} cover`} className='th-plant-item-cover' />
                        <div className='center-price'>{price} £</div>      
                  </div>
                  Nom : { name }
                  <div>
                        <CareScale careType='light' scaleValue={light} />
                        <CareScale careType='water' scaleValue={water} />
                  </div>
            </li>
      );
}

export default PlantItem;