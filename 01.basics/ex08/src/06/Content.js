import React, {Fragment} from 'react';
import Clock01 from './Clock01';
import Clock02 from './Clock02';

export default function(){
    return (
        <Fragment>
            <p>{`특징3: JSX표현식 표기법 {expression}과 문제점`}</p>
            <Clock01 />
            <Clock02 />
        </Fragment>
    );
}