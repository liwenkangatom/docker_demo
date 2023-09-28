import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Root from "./routes/root";
import EmptyPage from "./pages/404";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { rootStore, StoreProvider } from "./models/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} errorElement={<EmptyPage />}>
      <Route index element={<HomePage />} />
      <Route path='about' element={<AboutPage />} />
    </Route>
  )
);
function App() {
  return (
    <StoreProvider value={rootStore}>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}

export default App;
