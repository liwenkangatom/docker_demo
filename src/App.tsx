import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import { StoreProvider, rootStore } from "@models/Root";
import EmptyPage from "@pages/404";
import AboutPage from "@pages/AboutPage";
import HomePage from "@pages/HomePage";
import Root from "@routes/root";

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
