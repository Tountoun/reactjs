import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({careType, scaleValue}){
      const range = [1, 2, 3];

      const scaleType =
            careType === 'light' ? (
                  <img src={Sun} alt='sun-icon' />
            ) : (
                  <img src={Water} alt='water-icon' />
            );
      
      return (
            <div>
                  {
                        careType === 'light' ? 'Luminosité ' : 'Humidité '
                  }
                   :
                  {
                        range.map(elt => 
                              scaleValue >= elt ? (<span key={elt.toString()} style={{marginLeft:10}}>{scaleType}</span>) : null
                        )
                  }
            </div>
      )
}

function level(value) {
      const map = {
            1: 'peu',
            2: 'modérément',
            3: 'beaucoup'
      }
      return map[value];
}

export default CareScale;