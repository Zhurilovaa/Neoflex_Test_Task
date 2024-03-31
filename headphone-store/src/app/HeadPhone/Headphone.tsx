import { useDispatch } from 'react-redux';
import './HeadPhone.css';
import { HeadphoneProps } from './HeadPhone.types';
import star from './source/star.png';
import { addInBasket, deleteInBasket, setIsFavorite, subInBasket } from '../../slices/headphoneSlice';
import { FavoriteButton } from '../MainMenu/components/FavoriteButton/FavoriteButton';
import { TrashButton } from './components/TrashButton/TrashButton';

export function Headphone({ basketOn, product }: HeadphoneProps) {
  const dispatch = useDispatch();
  function handleBuyProduct() {
    console.log('Buy function work!');
    dispatch(
      addInBasket({
        id: product.id,
      })
    );
  }
  function handleFavoriteProduct() {
    console.log('Favorite function work!');
    dispatch(
      setIsFavorite({
        id: product.id,
      })
    );
  }
  function handleDeleteProduct() {
    console.log('Delete function work!');
    dispatch(
      deleteInBasket({
        id: product.id,
      })
    );
  }
  function handleAddProduct() {
    console.log('Sub function work!');
    dispatch(
      addInBasket({
        id: product.id,
      })
    );
  }
  function handleSubProduct() {
    console.log('Add function work!');
    dispatch(
      subInBasket({
        id: product.id,
      })
    );
  }
  return (
    <>
      {!basketOn ? (
        <div className="product-element">
          <div className="product-element__fav" onClick={handleFavoriteProduct}>
            <FavoriteButton favorite={product.isFavorite} />
          </div>
          <div className="product-element__img">
            <img src={product.img} alt={product.title} className="img-product" />
          </div>
          <div className="title-and-price">
            <div className="title-and-price__title">{product.title}</div>
            <div className="title-and-price__price">{product.price} ₽</div>
          </div>
          <div className="rate-and-buy">
            <div className="rate-and-buy__rate">
              <div className="rate-and-buy__star">
                <img src={star} />
              </div>
              <div className="rate-and-buy__rate-value">{product.rate}</div>
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
          <div className="button-fav-del-product">
            <div className="product-element__fav" onClick={handleFavoriteProduct}>
              <FavoriteButton favorite={product.isFavorite} />
            </div>
            <button className="delete-button" onClick={handleDeleteProduct}>
              <TrashButton />
            </button>
          </div>
          <div className="img-and-price">
            <div className="product-element__img">
              <img src={product.img} alt={product.title} className="img-product" />
            </div>
            <div className="title-and-price">
              <div className="title-and-price__title">{product.title}</div>
              <div className="title-and-price__price">{product.price} ₽</div>
            </div>
          </div>
          <div className="add-and-price">
            <div className="add-and-price__add">
              <div className="add-and-price__minus-plus">
                <button className="button-minus-plus" onClick={handleSubProduct}>
                  -
                </button>
              </div>
              <div className="add-and-price__count">{product.countInBasket}</div>
              <div className="add-and-price__minus-plus">
                <button className="button-minus-plus" onClick={handleAddProduct}>
                  +
                </button>
              </div>
            </div>
            <div className="add-and-price__price">{product.price * product.countInBasket} ₽</div>
          </div>
        </div>
      )}
    </>
  );
}
