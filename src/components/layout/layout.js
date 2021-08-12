import React from 'react'
import './layout.css'

const Layout = ({children}) => {
    return(
        <div className="layout-wrapper">
            <h1>LEARNABLE <span>20</span> APPLICATION FORM</h1>
            {children}
        </div>
    )
}
export {Layout}