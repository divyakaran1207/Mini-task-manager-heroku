import React from 'react'

function UserCard({id,name,picture}) {
    return (
        <div>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <img src={picture} alt="no img"></img>
        </div>
    )
}

export default UserCard
