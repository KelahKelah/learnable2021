import React from 'react'
import { Layout } from './components/'
import { Home } from './pages'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const LayoutRoute = ({Component, ...rest}) => {
     return(
        <Route 
            {...rest}
            render={(props)=> ( 
                <Layout>
                    <Component props={props} />
                </Layout>
      ) }
        />
    )
}

const Approute  = () => {
    return(    
        <Router>
            <Switch>
                <LayoutRoute 
                    path={"/home"}
                    exact={true}
                    Component={ Home }
                />
                
            </Switch>
        </Router>     
    )
}
export default Approute;