import { I18nextProvider } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'
import { navigationRouter } from './navigationRouter'
import i18n from '@/common/utils/i18nextConfiguration'
import './assets/css/index.css'

function App() {

  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={navigationRouter} />
    </I18nextProvider>
  )
}

export default App
