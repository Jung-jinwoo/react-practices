import React from 'react';

export default function(){

    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    const htmls = "<span></span>";


    return (
        // HTML 태그를 동적으로 생성하여 JSX element의 특정 속성으로 추가하는 작업은 금지하고 있지만,
        // XSS(Cross-Site Scripting) 보호기능을 끄고 사용할 수 있다.
        <div dangerouslySetInnerHTML={{__html: htmls}} />
    );
}