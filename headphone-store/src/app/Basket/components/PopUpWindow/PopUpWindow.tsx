import { useDispatch } from 'react-redux';
import './PopUpWindow.css';
import { setReadyToPay, buyAllInBasket } from '../../../../slices/headphoneSlice';

export function PopUpWindow() {
  const dispatch = useDispatch();

  function handleDontPay() {
    dispatch(setReadyToPay({}));
  }
  function handleBuyAll() {
    console.log('Buy All function work!');
    dispatch(setReadyToPay({}));
    dispatch(buyAllInBasket({}));
  }
  return (
    <div id="openModal" className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="name-section">Оформление покупки:</h3>
            <a href="#close" title="Close" className="close" onClick={handleDontPay}>
              ×
            </a>
          </div>
          <div className="modal-body">
            <p>Желаете оплатить?</p>
            <div className="pay-all">
              <button className="button-buy not-disabled" onClick={handleBuyAll}>
                Оплатить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
