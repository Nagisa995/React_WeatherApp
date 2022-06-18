import { React } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { weatherApp } from './js/store/reducer'
import { BrowserRouter } from 'react-router-dom'
import { Main } from './Main'
import { Help } from './Help'
import { Routes, Route } from 'react-router-dom'

const store = createStore(weatherApp);

function App() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/help' element={<Help />} />
        </Routes>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)  