import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { Layout, Main } from '~/pages'

const AboutLazy = lazy(() => import('../pages/About/About'))
const PartnersLazy = lazy(() => import('../pages/Partners/Partners'))
const ServicesLazy = lazy(() => import('../pages/Services/Services'))
const PaymentLazy = lazy(() => import('../pages/Payment/Payment'))
const DeliveryLazy = lazy(() => import('../pages/Delivery/Delivery'))
const ShoppingCartLazy = lazy(
  () => import('../pages/ShoppingCart/ShoppingCart'),
)

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Main />} />
        <Route path="/about" element={<AboutLazy />} />
        <Route path="/partners" element={<PartnersLazy />} />
        <Route path="/services" element={<ServicesLazy />} />
        <Route path="/payment" element={<PaymentLazy />} />
        <Route path="/delivery" element={<DeliveryLazy />} />
        <Route path="/shoppingcart" element={<ShoppingCartLazy />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
