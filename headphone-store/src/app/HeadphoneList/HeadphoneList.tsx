import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HeadphoneList.css';
import { Headphone } from '../HeadPhone/Headphone';
import { ReduxStoreToolkit } from '../../types/ReduxStore.types';
import { HeadphoneData } from '../../types/Headphone.types';
import { MainMenu } from '../MainMenu/MainMenu';
import { Footer } from '../Footer/Footer';

export function HeadphoneList() {
  const locatPage = useLocation();

  const headphoneListCurr = useSelector((state: ReduxStoreToolkit) => state.headPhoneList.value);
  const countAll = useSelector((state: ReduxStoreToolkit) => state.headPhoneList.countAll);
  console.log(`Create HeadPhoneList component.`);
  console.log('Curr location = ', locatPage);
  console.log('headphoneListCurr:', headphoneListCurr);
  console.log('countAll', countAll);

  return (
    <div className="content">
      <div>
        <MainMenu />
      </div>
      <div className="tab_content">
        <div className="part">
          <div className="name-section">Наушники</div>
          <div className="products-list">
            {headphoneListCurr.map((product: HeadphoneData, index = 0) => (
              <Headphone key={index} basketOn={false} />
            ))}
          </div>
        </div>
        <div className="part">
          <div className="name-section">Беспроводные наушники</div>
          <div className="products-list">
            {headphoneListCurr.map((product: HeadphoneData, index = 0) => (
              <Headphone key={index} basketOn={false} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
