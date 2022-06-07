import React from 'react'
import './css/style.css'

export function SearchForm({changeHandle, submitHandle, searchValue}) {
    return (
        <form action='#' method='get' onSubmit={submitHandle}>
            <input placeholder="enter city name" type="text" onChange={changeHandle} value={searchValue}/>
            <button type='submit'/>
        </form>
    );
}