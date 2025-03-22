import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import FavoritePage from "./pages/FavoritePage";
import FavoriteDetailPage from "./pages/FavoriteDetailPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  }, 
  {
    path: "/fav",
    element: <FavoritePage/>,
  },
  {
    path: "/fav/:id",
    element: <FavoriteDetailPage/>,
  },

  {
    path: "/login",
    element: <LoginPage/>,
  },

  {
    path: "signup",
    element: <SignUpPage/>,
  },

  {
    path: "*",
    element: <NotFoundPage/>,
  }

  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
