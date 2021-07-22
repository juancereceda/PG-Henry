import React from 'react';
import { Revs } from './ReviewsStyles';
import { useSelector } from 'react-redux';

export default function Reviews () {

    let flag = useSelector(state => state.showRevs);

    return (
        <Revs>
            <h3 className="tit">Write us a review!</h3>
            {flag === true ? <div>Hey hoy!</div> : null}
            <h4>Hey hey hey</h4>
        </Revs>
    )
}