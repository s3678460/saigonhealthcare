import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import LandingPage from '../LandingPage/LandingPage'
import CongratulationPage from '../LandingPage/CongratulationPage'
// import WinWheel from '../WinWheel/WinWheel';


export default class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/success" component={CongratulationPage}/>
                    <Route component={LandingPage} />
                </Switch>
            </div>
        )
    }
}
