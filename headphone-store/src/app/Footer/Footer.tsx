import { useNavigate } from 'react-router-dom';
import './Footer.css';
import internet from './source/internet3.png';
import vk from './source/vk.png';
import telegram from './source/telegram.png';
import whatsapp from './source/whatsapp.png';

export function Footer() {
  const navigateMainPage = useNavigate();

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
    <div className="footer">
      <div className="logo">
        <a className="name-shop" onClick={handleNavigateMainPage}>
          <div>QPICK</div>
        </a>
      </div>
      <div className="links">
        <div className="links__part" onClick={handleNavigateFavoritesPage}>
          <div>
            <p>Избранное</p>
          </div>
          <div>
            <p>Условия сервиса</p>
          </div>
        </div>
        <div className="links__part">
          <div onClick={handleNavigateBasketPage}>
            <p>Корзина</p>
          </div>
        </div>
        <div className="links__part">
          <div>
            <p>Контакты</p>
          </div>
          <div className="links__lang-part">
            <div className="links__lang">
              <img src={internet} id="internet" />
            </div>
            <div className="links__lang">
              <p id="rus">Rus</p>
            </div>
            <div className="links__lang">Eng</div>
          </div>
        </div>
      </div>
      <div className="social-media">
        <div className="social-media__icon">
          <a href="http://vk.com" target="_blank" rel="noreferrer">
            <img src={vk} alt="vk.com" id="vk" />
          </a>
        </div>
        <div className="social-media__icon">
          <a href="https://telegram.org" target="_blank" rel="noreferrer">
            <img src={telegram} alt="telegram" id="telegram" />
          </a>
        </div>
        <div className="social-media__icon">
          <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="whatsapp" id="whatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
}
