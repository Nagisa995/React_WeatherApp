import { React } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {
  weatherApp
} from './js/store/reducer'
import '../css/style.css'
import {
  SearchForm
} from './searchForm/SearchForm'
import {
  UIContent
} from './uiContent/UIContent'

const store = createStore(weatherApp);

function Main() {
  return (
    <div className='main_body'>
      <SearchForm />
      <UIContent />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Main />
  </Provider>
)
