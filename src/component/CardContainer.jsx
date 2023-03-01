import React from 'react'
import UserCard from './usercard'

function CardContainer() {
    let userlist = [
        {
            username: " athira",
            userid: 789,
            rollno: 1
        },
        {
            username: "praveen",
            userid: 765,
            rollno: 2
        },
        {
            username: "vyshnavi",
            userid: 123,
            rollno: 3
        },
        {
            username: "akshay",
            userid: 123,
            rollno: 4
        }
    ]
    return (
        <div className='container'>
            {
                userlist.map((u) => {
                    return <UserCard user={u} />
                })
            }
        </div>
    )
}

export default CardContainer