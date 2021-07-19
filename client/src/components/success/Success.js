import React, { useEffect, useState } from 'react';
import {updateStatus} from '../../actions/products'
import SuccessMsg from './SuccessStyles'
const Success = (props) => {

    const queryString = props.location.search.substr(1)
    let queryArr = queryString.split('&')
    let queryArr2 = queryArr.map( e => e.split('=') )

    const status = queryArr2.filter(e => e[0] === 'collection_status')[0][1]
    const preference_id = queryArr2.filter(e => e[0] === 'preference_id')[0][1]

    const [counter, setCounter] = useState(3)

    useEffect(() => {
        updateStatus({status, preference_id})
        let intervalo = null;
        intervalo = setInterval(() => {  
            if(counter > 0) setCounter(counter - 1)
            if(counter === 1){
                intervalo.clearInterval()  
                window.location.assign('http://localhost:3000/profile')
            }
        }, 1000)            
    }, [status, preference_id, counter])
    return (
        <SuccessMsg>
            <div className="successBox">
                <h2>Payment {status}</h2>
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Redirecting in {counter}...</h3>
            </div>
        </SuccessMsg>
    )
}


export default Success;
