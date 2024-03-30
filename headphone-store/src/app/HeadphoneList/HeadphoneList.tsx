import './HeadphoneList.css';
import { Headphone } from '../HeadPhone/Headphone';

export function HeadphoneList() {
  return (
    <div>
      <h3>HeadphoneList component!</h3>
      <Headphone basketOn={false}></Headphone>
    </div>
  );
}
