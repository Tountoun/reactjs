import '../styles/PlantItem.css';
import CareScale from './CareScale';

function PlantItem({ id, name, cover, water, light }) {
      return (
            <li key={id} className='th-plant-item'>
                  <img src={cover} alt={`${name} cover`} className='th-plant-item-cover' />
                  { name }
                  <div>
                        <CareScale careType='light' scaleValue={light} />
                        <CareScale careType='water' scaleValue={water} />
                  </div>
            </li>
      );
}

export default PlantItem;