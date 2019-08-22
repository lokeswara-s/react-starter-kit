import React, { Component, lazy, Suspense } from 'react';
 

const LandingPage = (
    lazy(() => (
        Promise
        .resolve(
            require('./LandingPage'))
    ))
);

class Root extends Component{
    render(){
        return(
            <Suspense fallback={<div>Loading...</div>}>
                <LandingPage />
            </Suspense>
        );
    }
}

export { Root };
