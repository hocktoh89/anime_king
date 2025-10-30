import { Route, Routes } from 'react-router';
import Home from './views/Home';
import AnimeDetails from './views/AnimeDetails';

function MainRoutes() {

  return (
  <Routes>
    <Route index element={<Home />} />
    <Route path="anime-details" element={<AnimeDetails />} />
  </Routes>
  )
}

export default MainRoutes
