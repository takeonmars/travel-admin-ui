import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faReceipt, faRoute, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons'

export default function Header() {


    return <div className='header'>
        <div className='links'>
            {/* <div className='single--link active'>Main</div> */}
            <div className='single--link active'>
                <FontAwesomeIcon icon={faUsers} />
            </div>
            <div className='single--link'>
                <FontAwesomeIcon icon={faRoute} />
            </div>
            <div className='single--link'>
                <FontAwesomeIcon icon={faReceipt} />
            </div>
            <div className='single--link'>
                <FontAwesomeIcon icon={faMap} />
            </div>
        </div>
        <div className='search'>
            <input type='text'></input>
            <FontAwesomeIcon icon={faSearch} />
        </div>
    </div>
}