import React, { Component, lazy, Suspense } from 'react';
 

const Info = (
    lazy(() => (
        Promise
        .resolve(
            require('./InfoSection'))
    ))
);

class Help extends Component{
    render(){
        return(
            <Suspense fallback={<div>Loading...</div>}>
                <Info />
            </Suspense>
        );
    }
}

export { Help };
