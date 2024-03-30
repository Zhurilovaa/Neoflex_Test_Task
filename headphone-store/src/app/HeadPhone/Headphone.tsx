import './HeadPhone.css';
import { HeadphoneProps } from './HeadPhone.types';

export function Headphone({ basketOn }: HeadphoneProps) {
  function handleBuyProduct() {
    console.log('Buy function work!');
  }
  function handleDeleteProduct() {
    console.log('Delete function work!');
  }
  function handleSubProduct() {
    console.log('Sub function work!');
  }
  function handleAddProduct() {
    console.log('Add function work!');
  }
  return (
    <>
      {!basketOn ? (
        <div className="product-element">
          <div className="product-element__img">
            <img src="" alt="{{pr.title}}" className="img-product" />
          </div>
          <div className="title-and-price">
            <div className="title-and-price__title">title</div>
            <div className="title-and-price__price">price ₽</div>
          </div>
          <div className="rate-and-buy">
            <div className="rate-and-buy__rate">
              <div className="rate-and-buy__star">
                <img src="/assets/star.png" />
              </div>
              <div className="rate-and-buy__rate-value">rate</div>
            </div>
            <div className="buy">
              <button className="button-buy" onClick={handleBuyProduct}>
                Купить
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="product-in-basket">
          <div className="delete-product">
            <button className="delete-button">
              <img src="" onClick={handleDeleteProduct} />
            </button>
          </div>
          <div className="img-and-price">
            <div className="product-element__img">
              <img src="" alt="{{pr.title}}" className="img-product" />
            </div>
            <div className="title-and-price">
              <div className="title-and-price__title">pr.title</div>
              <div className="title-and-price__price">pr.price ₽</div>
            </div>
          </div>
          <div className="add-and-price">
            <div className="add-and-price__add">
              <div className="add-and-price__minus-plus">
                <button className="button-minus-plus" onClick={handleSubProduct}>
                  -
                </button>
              </div>
              <div className="add-and-price__count">pr.count_in_basket</div>
              <div className="add-and-price__minus-plus">
                <button className="button-minus-plus" onClick={handleAddProduct}>
                  +
                </button>
              </div>
            </div>
            <div className="add-and-price__price">pr.price * pr.count_in_basket ₽</div>
          </div>
        </div>
      )}
    </>
  );
}
