import { useSelector } from 'react-redux';
import './FavoritesList.css';
import { Headphone } from '../HeadPhone/Headphone';
import { ReduxStoreToolkit } from '../../types/ReduxStore.types';
import { HeadphoneData } from '../../types/Headphone.types';
import { MainMenu } from '../MainMenu/MainMenu';
import { Footer } from '../Footer/Footer';

export function FavoritesList() {
  const favoritesListCurr = useSelector((state: ReduxStoreToolkit) => state.headPhoneList.value);
  const countFavorite = useSelector((state: ReduxStoreToolkit) => state.headPhoneList.countFavorite);

  return (
    <div className="content">
      <div>
        <MainMenu />
      </div>
      <div className="tab_content">
        <div className="part">
          <div className="name-section">Избранное</div>
          {countFavorite ? (
            <div className="products-list">
              {favoritesListCurr
                .filter((product) => product.isFavorite)
                .map((product: HeadphoneData, index = 0) => (
                  <Headphone key={index} basketOn={false} product={product} />
                ))}
            </div>
          ) : (
            <div className="empty">
              <div className="name-section">в списке избранного пусто...</div>
            </div>
          )}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
