import React, { useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Homepage from './Pages/Homepage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import ProductsPage from './Pages/ProductsPage';
import SearchPage from './Pages/SearchPage';
import LoginSignUpPage from './Pages/LoginSignUpPage';
import AccountPage from './Pages/AccountPage';
import UpdateProfilePage from './Pages/UpdateProfilePage';
import UpdatePasswordPage from './Pages/UpdatePasswordPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import ResetPasswordPage from './Pages/ResetPasswordPage';
import ShippingPage from './Pages/ShippingPage';
import ConfirmOrderPage from './Pages/ConfirmOrderPage';
import PaymentPage from './Pages/PaymentPage';
import OrderSuccessPage from './Pages/OrderSuccessPage';
import MyOrdersPage from './Pages/MyOrdersPage';
import Cartpage from './Pages/Cartpage';
import OrderDetailsPage from './Pages/OrderDetailsPage';
import DashboardPage from './Pages/DashboardPage';
import ProductListPage from './Pages/ProductListPage';
import NewProductPage from './Pages/NewProductPage';
import UpdateProductPage from './Pages/UpdateProductPage';
import OrderListPage from './Pages/OrderListPage';
import ProcessOrderPage from './Pages/ProcessOrderPage';
import UsersListPage from './Pages/UsersListPage';
import UpdateUserPage from './Pages/UpdateUserPage';
import ProductReviewsPage from './Pages/ProductReviewsPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ProtectedRoute from './Components/ProtectedRoute';
import store from './store.js'
import { loadUser } from './actions/userAction';
// import axios from 'axios';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import NotFound from './Components/layout/NotFound/NotFound';


function App() {

  // const [stripeApiKey, setStripeApiKey] = useState("");

  // const getStripeApiKey = async () => {
  //   const { data } = await axios.get("https://mern-87y8.onrender.com/api/v1stripeapikey");
  //   setStripeApiKey(toString(data.stripeApiKey));
  // }

  useEffect(() => {
    store.dispatch(loadUser());
    // getStripeApiKey();
  })

  // window.addEventListener('contextmenu', (e) => e.preventDefault());

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '*',
        element: <NotFound />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/product/:id',
        element: <ProductDetailsPage />
      },
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: '/products/:keyword',
        element: <ProductsPage />
      },
      {
        path: '/search',
        element: <SearchPage />
      },
      {
        path: '/login',
        element: <LoginSignUpPage />
      },
      {
        path: '/account',
        element: <ProtectedRoute component={<AccountPage />} />
      },
      {
        path: '/me/update',
        element: <ProtectedRoute component={<UpdateProfilePage />} />
      },
      {
        path: '/password/update',
        element: <ProtectedRoute component={<UpdatePasswordPage />} />
      },
      {
        path: '/password/forgot',
        element: <ForgotPasswordPage />
      },
      {
        path: '/password/reset/:token',
        element: <ResetPasswordPage />
      },
      {
        path: '/cart',
        element: <ProtectedRoute component={<Cartpage />} />

      },
      {
        path: '/shipping',
        element: <ProtectedRoute component={<ShippingPage />} />
      },
      {
        path: "/order/confirm",
        element: <ProtectedRoute component={<ConfirmOrderPage />} />
      },
      {
        path: "/process/payment",
        element: <ProtectedRoute component={<Elements stripe={loadStripe("pk_test_51OooK1SFxK0qW4lrTWh4FuCRZBUFK9JxkcUarQioWO0JIfVeUBjj9N8qELF7Frl4cPE8umhjudsyPtJ1hiHY1uO200cqVhaLtR")}><PaymentPage /></Elements>} />
      },
      {
        path: "/success",
        element: <ProtectedRoute component={<OrderSuccessPage />} />
      },
      {
        path: "/orders/me",
        element: <ProtectedRoute component={<MyOrdersPage />} />
      },
      {
        path: "/order/:id",
        element: <ProtectedRoute component={<OrderDetailsPage />} />
      },
      {
        path: "/admin/dashboard",
        element: <ProtectedRoute component={<DashboardPage />} />
      },
      {
        path: "/admin/products",
        element: <ProtectedRoute component={<ProductListPage />} />
      },
      {
        path: '/admin/product/new',
        element: <ProtectedRoute component={<NewProductPage />} />
      },
      {
        path: '/admin/product/:id',
        element: <ProtectedRoute component={<UpdateProductPage />} />
      },
      {
        path: '/admin/orders',
        element: <ProtectedRoute component={<OrderListPage />} />
      },
      {
        path: '/admin/order/:id',
        element: <ProtectedRoute component={<ProcessOrderPage />} />
      },
      {
        path: '/admin/users',
        element: <ProtectedRoute component={<UsersListPage />} />
      },
      {
        path: '/admin/user/:id',
        element: <ProtectedRoute component={<UpdateUserPage />} />
      },
      {
        path: '/admin/reviews',
        element: <ProtectedRoute component={<ProductReviewsPage />} />
      },
    ]
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;
