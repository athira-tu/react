import React from 'react'
import '../card.css'

function UserCard(props) {
    return (
        <div className='usercard'>
            <p>username:{props.user.username}</p>
            <p>userId:{props.user.userid}</p>
            <p>rollno:{props.user.rollno}</p>
            <button>view user</button>
        </div>
    )
}

export default UserCard