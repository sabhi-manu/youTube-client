
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router'
import { ToastContainer } from "react-toastify"
import { Provider } from 'react-redux'
import store from './store/store.js'
import { SearchProvider } from './context/SearchContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>

            <SearchProvider>
                <App />
                <ToastContainer />
            </SearchProvider>

        </Provider>
    </BrowserRouter>

)
