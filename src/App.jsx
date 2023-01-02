import { BrowserRouter,Routes,Route } from "react-router-dom";

import { DetailsPage, ErrorPage, HomeLayout, HomePage, MoviesPage, SearchPage, TvPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomeLayout /> } >
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/tv" element={<TvPage />} />
            <Route path="/:type/:id" element={<DetailsPage />} />
            <Route path="/:type/:id" element={<DetailsPage />} />
            <Route path="/categories/:type/:filter" element={<SearchPage />} />
        </Route>
        {/* //todo:arrelgar pagina de error en vista movil */}
        <Route path="/*" element={ <ErrorPage />} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
