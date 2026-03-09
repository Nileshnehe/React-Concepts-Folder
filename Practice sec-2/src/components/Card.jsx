import React from 'react'

const Card = ({ user }) => {

    return (
        <div className='card'>
            {/* img */}
            <p className='price'>{user.price}</p>
            <div className='img'>
                <img src={user.img} />
            </div>

            {/* name  */}
            <div className='info'>
                <h3 className="name">{user.id} {user.name}</h3>
                <p className="role">{user.role}</p>
                <p className="type">{user.type}</p>
            </div>

            {/* tech languages */}
            <div className='skill'>
                {user.skills.map((skill, index) => (
                    <p key={index} className={skill.startsWith('+') ? 'color' : ''}>
                        {skill}
                    </p>
                ))}
            </div>

            {/* desc */}
            <div className='disc'>
                <p>{user.desc} </p>
            </div>

            <div className='line'></div>
            <p className='profile'>View Profile</p>
        </div>
    )
}

export default Card