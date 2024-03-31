import { useNavigate } from 'react-router-dom';
import './MainMenu.css';
import { useSelector } from 'react-redux';
import { ReduxStoreToolkit } from '../../types/ReduxStore.types';
import { FavoriteButton } from './components/FavoriteButton/FavoriteButton';
import { BasketButton } from './components/BasketButton/BasketButton';

export function MainMenu() {
  const navigateMainPage = useNavigate();
  const countFavorite = useSelector((state: ReduxStoreToolkit) => state.headPhoneList.countFavorite);
  const countBasket = useSelector((state: ReduxStoreToolkit) => state.headPhoneList.countBasket);

  function handleNavigateMainPage() {
    console.log('Navigate Logo work!');
    navigateMainPage(`/qpick`, { replace: false });
  }

  function handleNavigateBasketPage() {
    console.log('Navigate Basket work!');
    navigateMainPage(`/qpick/basket`, { replace: false });
  }
  function handleNavigateFavoritesPage() {
    console.log('Navigate Favorites work!');
    navigateMainPage(`/qpick/favorites`, { replace: false });
  }

  return (
    <header className="head">
      <div className="logo">
        <a className="name-shop" onClick={handleNavigateMainPage}>
          <div>QPICK</div>
        </a>
      </div>
      <div className="menu-icons">
        <div className="menu-icons__element">
          <div onClick={handleNavigateFavoritesPage}>
            <FavoriteButton favorite={false} />
          </div>
          <div className="count-product">{countFavorite}</div>
        </div>
        <div className="menu-icons__element">
          <div onClick={handleNavigateBasketPage}>
            <BasketButton />
          </div>
          <div className="count-product">{countBasket}</div>
        </div>
      </div>
    </header>
  );
}
