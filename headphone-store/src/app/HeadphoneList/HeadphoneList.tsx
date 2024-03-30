import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HeadphoneList.css';
import { Headphone } from '../HeadPhone/Headphone';
import { ReduxStoreToolkit } from '../../types/ReduxStore.types';
import { HeadphoneData } from '../../types/Headphone.types';

export function HeadphoneList() {
  const locatPage = useLocation();
  // const navigateBasketPage = useNavigate();

  const headphoneListCurr = useSelector((state: ReduxStoreToolkit) => state.headPhoneList.headPhoneList);
  const countAll = useSelector((state: ReduxStoreToolkit) => state.headPhoneList.countAll);
  console.log(`Create TaskList component.`);
  console.log('Curr location = ', locatPage);
  console.log('headphoneListCurr:', headphoneListCurr);
  console.log('countAll', countAll);

  // function handleNavigateBasketPage() {
  //   navigateBasketPage(`/qpick/basket`, { replace: false });
  // }
  return (
    <div>
      <div className="name-section">Наушники</div>
      <Headphone basketOn={false} />
      <div className="products-list">
        {headphoneListCurr.map((product: HeadphoneData, index = 0) => (
          <Headphone key={index} basketOn={false} />
        ))}
      </div>
    </div>
  );
}
