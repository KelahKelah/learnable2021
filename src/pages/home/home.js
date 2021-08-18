import React from 'react'
import {TabContainer } from '../../components/'
import {Assessment, Thought, Education, PersonalData, SocialMedia } from '../home/components'
import { useLocation  } from 'react-router-dom'

const Home = () => {
    const location = useLocation()
    const DisplayComponents = () => {
        switch(location.hash) {
            case '#personalData':
                return <PersonalData />
            case '#education':
                return <Education />
            case '#thought':
                return <Thought />
            case '#socialMedia':
                return <SocialMedia />
            case '#assessment':
                return <Assessment />
            default:
                return <PersonalData />
            
        }
    }
    return(
        <>
        <TabContainer 
                children={
                    <DisplayComponents />
                }
        />
        </>
    )
}
export {Home}