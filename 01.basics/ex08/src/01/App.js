import React from 'react';

export default function(){
    return (
        <div>
            <h2>App01</h2>
            <p>JSX Tutorials -특징1: HTML과 차이점</p>
            {/*
                1. 속성은 Camel Case
            */}
            <input type='text' maxLength='10' />
            {/*
                2. Element는 꼭 닫혀야 한다
                오류) <br>, <hr>, <input>, <img> ... 
            */}
            <br/>
            <hr/>
            <img src="https://raddevon.com/wp-content/uploads/2018/10/react.jpg" />
            {/*
                3. 속성 이름은 DOM API 기반이다. 
            */}
            <div id='box' className='box'>
                box 입니다.
            </div>
        </div>
    )
}