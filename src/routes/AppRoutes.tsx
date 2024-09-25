import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { Layout } from '~/pages'
import { Spiner } from '~/ui'

const MainLazy = lazy(() => import('../pages/Main/Main'))

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
      <Route path="" element={<Layout />}>
        <Route
          path="/"
          index
          element={
            <Suspense fallback={<Spiner />}>
              <MainLazy />
            </Suspense>
          }
        />

        <Route
          path="/about"
          element={
            <Suspense fallback={<Spiner />}>
              <AboutLazy />
            </Suspense>
          }
        />

        <Route
          path="/partners"
          element={
            <Suspense fallback={<Spiner />}>
              <PartnersLazy />
            </Suspense>
          }
        />

        <Route
          path="/services"
          element={
            <Suspense fallback={<Spiner />}>
              <ServicesLazy />
            </Suspense>
          }
        />

        <Route
          path="/payment"
          element={
            <Suspense fallback={<Spiner />}>
              <PaymentLazy />
            </Suspense>
          }
        />

        <Route
          path="/delivery"
          element={
            <Suspense fallback={<Spiner />}>
              <DeliveryLazy />
            </Suspense>
          }
        />
        
        <Route
          path="/shoppingcart"
          element={
            <Suspense fallback={<Spiner />}>
              <ShoppingCartLazy />{' '}
            </Suspense>
          }
        />

        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
