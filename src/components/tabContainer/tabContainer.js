import React from 'react'
import { NavLink } from 'react-router-dom'

const TabContainer = () => {
    return(
        <div>
            <ul className="">
                <li>I am a list</li>
            </ul>
            {children}
        </div>
    )
}
export {TabContainer}