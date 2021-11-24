import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Users() {

    const userTest = ['User 1', 'User 2'];

    let userList = userTest.map((el) => <div className='singleUser'>
        <div className='userPic'>
            <FontAwesomeIcon icon={faUser} />
        </div>
        <div className='userName'>{el}</div>
    </div>)
    console.log('ok');

    return <div className='main-container'>
        <div className='userList'>
            {userList}
        </div>
    </div>
}