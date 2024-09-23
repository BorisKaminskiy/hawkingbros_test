import { FC, ReactElement } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { setupStore } from './store/store'
import AppRoutes from './routes/AppRoutes'

const App: FC = (): ReactElement => {
  return (
    <Provider store={setupStore()}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
