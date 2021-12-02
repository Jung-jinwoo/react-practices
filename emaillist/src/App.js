import React from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import './assets/scss/App.scss';
import Emaillist from './Emaillist';

export default function(){
    return (
        <div className={'App'}>
            <RegisterForm />
            <SearchBar />
            <Emaillist />
        </div>
    )
}