import React, { Component, lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './Components/BaseComponents/NavBar';
import './app.scss';
import { Root } from './Components/Pages/Root'
import { Help } from './Components/Pages/Help'
class App extends Component{
    render(){
         return( 
            <div>
               <NavBar />
                <Switch>
                    <Route exact path='/' component={Root}/>
                    <Route path='/help' component={Help}/>
                </Switch>
            </div>
        )
    } 

}

export default App