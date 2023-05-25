import * as URLS from './constants/urls'
import { createBrowserRouter } from 'react-router-dom'
import { Main } from './pages/Main'
import { About } from './pages/About'
import { Cart } from './pages/Cart'
import { Order } from './pages/Order'
import { Product } from './pages/Product'
import { NotFound } from './pages/404'

export const router = createBrowserRouter([
  {
    path: URLS.MAIN,
    element: <Main />,
    errorElement: <NotFound />,
  },
  {
    path: URLS.ABOUT,
    element: <About />,
  },
  {
    path: URLS.CART,
    element: <Cart />,
  },
  {
    path: URLS.ORDER,
    element: <Order />,
  },
  {
    path: URLS.PRODUCT(),
    element: <Product />,
  },
])
