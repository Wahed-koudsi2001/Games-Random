import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Pages/NotFound';
import GamesId from "./Pages/GamesId";
import Pricing from './Pages/Pricing';
import GamesbyTag from './Pages/GamesbyTag';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path=':id' element={<GamesId />} />
          <Route path='games-by-tag' element={<GamesbyTag />} />
          <Route path="error-404" element={<NotFound />} />
          <Route path="pricing" element={<Pricing />} />
        </Route >
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;