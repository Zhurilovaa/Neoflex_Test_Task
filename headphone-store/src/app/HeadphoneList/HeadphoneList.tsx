import { useSelector } from 'react-redux';
import './HeadphoneList.css';
import { Headphone } from '../HeadPhone/Headphone';
import { ReduxStoreToolkit } from '../../types/ReduxStore.types';
import { HeadphoneData } from '../../types/Headphone.types';
import { MainMenu } from '../MainMenu/MainMenu';
import { Footer } from '../Footer/Footer';

export function HeadphoneList() {
  const headphoneListCurr = useSelector((state: ReduxStoreToolkit) => state.headPhoneList.value);

  return (
    <div className="content">
      <div>
        <MainMenu />
      </div>
      <div className="tab_content">
        <div className="part">
          <div className="name-section">Наушники</div>
          <div className="products-list">
            {headphoneListCurr
              .filter((product) => !product.bluetooth)
              .map((product: HeadphoneData, index = 0) => (
                <Headphone key={index} basketOn={false} product={product} />
              ))}
          </div>
        </div>
        <div className="part">
          <div className="name-section">Беспроводные наушники</div>
          <div className="products-list">
            {headphoneListCurr
              .filter((product) => product.bluetooth)
              .map((product: HeadphoneData, index = 0) => (
                <Headphone key={index} basketOn={false} product={product} />
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
