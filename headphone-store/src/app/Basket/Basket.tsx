import { Headphone } from '../HeadPhone/Headphone';
import './Basket.css';

export function Basket() {
  return (
    <div>
      <h3>Basket component!</h3>
      <Headphone basketOn={true}></Headphone>
    </div>
  );
}
