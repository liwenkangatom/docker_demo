import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from "./routes/root";
import EmptyPage from "./pages/404";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { ThemeProvider } from 'styled-components';
import Themes from './themes';
import { rootStore, StoreProvider } from './models/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <EmptyPage />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
  
]);

function App() {
  return (
  
  <StoreProvider value={rootStore}>
    <ThemeProvider theme={Themes['aeon']}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StoreProvider>)

}

export default App;
