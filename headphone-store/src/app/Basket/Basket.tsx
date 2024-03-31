import { useDispatch, useSelector } from 'react-redux';
import { Headphone } from '../HeadPhone/Headphone';
import './Basket.css';
import { ReduxStoreToolkit } from '../../types/ReduxStore.types';
import { MainMenu } from '../MainMenu/MainMenu';
import { Footer } from '../Footer/Footer';
import { HeadphoneData } from '../../types/Headphone.types';
import { buyAllInBasket } from '../../slices/headphoneSlice';

export function Basket() {
  const dispatch = useDispatch();
  const headphoneListCurr = useSelector((state: ReduxStoreToolkit) => state.headPhoneList.value);
  const countBasket = useSelector((state: ReduxStoreToolkit) => state.headPhoneList.countBasket);
  const sumPrice = useSelector((state: ReduxStoreToolkit) => state.headPhoneList.sumPriceInBasket);

  function handleBuyAll() {
    console.log('Buy All function work!');
    dispatch(buyAllInBasket({}));
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
                <div className="name-section">в списке избранного пусто...</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
