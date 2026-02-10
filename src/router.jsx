import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import Product from "./pages/product/Product";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'shop',
                element: <Shop /> 
            },
            {
                path: 'product',
                element: <Product />
            },
            {
                path: 'contact',
                element: <Contact />
            },
                        {
                path: 'register',
                element: <Register />
            },
                        {
                path: 'login',
                element: <Login />
            },
        ]
    }
]);
export default router;