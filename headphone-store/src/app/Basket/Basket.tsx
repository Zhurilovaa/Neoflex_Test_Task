import { useDispatch, useSelector } from 'react-redux';

import './Basket.css';

import { Headphone } from '../HeadPhone/Headphone';
import { ReduxStoreToolkit } from '../../types/ReduxStore.types';
import { MainMenu } from '../MainMenu/MainMenu';
import { Footer } from '../Footer/Footer';
import { HeadphoneData } from '../../types/Headphone.types';
import { PopUpWindow } from './components/PopUpWindow/PopUpWindow';
import { setReadyToPay } from '../../slices/headphoneSlice';

export function Basket() {
  const dispatch = useDispatch();
  const headphoneListCurr = useSelector((state: ReduxStoreToolkit) => state.headPhoneList.value);
  const countBasket = useSelector((state: ReduxStoreToolkit) => state.headPhoneList.countBasket);
  const sumPrice = useSelector((state: ReduxStoreToolkit) => state.headPhoneList.sumPriceInBasket);
  const readyPay = useSelector((state: ReduxStoreToolkit) => state.headPhoneList.readyToPay);

  function handleBuyAll() {
    dispatch(setReadyToPay({}));
  }

  return (
    <div className="content">
      <div>
        <MainMenu />
      </div>
      <div className="tab_content">
        <div className="part">
          <div className="name-section">Корзина</div>
          <div className="basket">
            {countBasket ? (
              <div className="list-buy">
                {headphoneListCurr
                  .filter((product) => product.countInBasket)
                  .map((product: HeadphoneData, index = 0) => (
                    <Headphone key={index} basketOn={true} product={product} />
                  ))}
              </div>
            ) : (
              <div className="empty">
                <div className="name-section">в корзине пусто...</div>
              </div>
            )}
            <div className="pay">
              <div className="price-all-product">
                <div className="name-section">ИТОГО</div>
                <div className="add-and-price__price">₽ {sumPrice} </div>
              </div>
              <div className="pay-all">
                <button
                  className={'button-buy' + (countBasket ? ' not-disabled' : ' disabled')}
                  onClick={handleBuyAll}
                  disabled={!countBasket}>
                  Перейти к оформлению
                </button>
              </div>
            </div>
          </div>
        </div>
        {readyPay ? <PopUpWindow /> : <></>}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
