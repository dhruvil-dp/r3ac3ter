import React from 'react'
import { useSelector } from 'react-redux'
import avatar from '../images/avatar.png'
const Avatar = ({src, size}) => {
    const { theme } = useSelector(state => state)

    return (
        <img src={avatar} alt="avatar" className={size}
        style={{filter: `${theme ? 'invert(1)' : 'invert(0)'}`}} />
    )
}

export default Avatar
