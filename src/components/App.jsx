import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Section from './Section';
import { ToastContainer } from 'react-toastify';
import PropagateLoader from 'react-spinners/PropagateLoader';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../views/Home.js'));
const Movies = lazy(() => import('../views/Movies.js'));
const MovieDetails = lazy(() => import('views/MovieDetails'));
const Cast = lazy(() => import('views/Cast/Cast.js'));
const Reviews = lazy(() => import('views/Reviews/Reviews.js'));
const NotFoundPage = lazy(() => import('../views/NotFound'));

export default function App() {
  return (
    <Section>
      <Suspense fallback={<PropagateLoader color="#41d61f" />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </Section>
  );
}
