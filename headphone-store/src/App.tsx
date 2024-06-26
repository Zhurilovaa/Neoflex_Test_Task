import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import { HeadphoneList } from './app/HeadphoneList/HeadphoneList';
import { Basket } from './app/Basket/Basket';
import { FavoritesList } from './app/FavoritesList/FavoritesList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="qpick/basket" element={<Basket />} />
        <Route path="qpick/favorites" element={<FavoritesList />} />
        <Route path="qpick" element={<HeadphoneList />} />
        <Route path="*" element={<Navigate to="/qpick" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
