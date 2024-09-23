import { Routes, Route, Navigate } from 'react-router'
import {
  Layout,
  Main,
  About,
  Partners,
  Services,
  Payment,
  Delivery,
  ShoppingCart,
} from '~/pages'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/services" element={<Services />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
