import { React } from 'react'
import {  Link} from 'react-router-dom'
import '../css/style.css'
import {
  SearchForm
} from './searchForm/SearchForm'
import {
  UIContent
} from './uiContent/UIContent'

export function Main() {
  return (
    <div className='main_body'>
      <SearchForm />
      <UIContent />
      <Link to='/help'>About App</Link>
    </div>
  );
}
