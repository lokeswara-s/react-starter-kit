import React from 'react';
import { Heading } from '../../../BaseComponents/Typography'

const HeaderSection = (props)=>{
    return (
        <div>
            <div style={{display:"inline-block"}}>
                <Heading.One transform="uppercase" orientation="">
                    Heading sample
                </Heading.One>
                <Heading.Two transform="uppercase" orientation="">
                    Heading sample
                </Heading.Two>
                <Heading.Three transform="uppercase" orientation="">
                    Heading sample
                </Heading.Three>
                <Heading.Four transform="uppercase" orientation="">
                    Heading sample
                </Heading.Four>
                <Heading.Five transform="uppercase" orientation="">
                    Heading sample
                </Heading.Five>
                <Heading.Six transform="uppercase" orientation="">
                    Heading sample
                </Heading.Six>
            </div>
            <div>
                <Heading.One transform="uppercase" orientation="vertical">
                    Heading sample
                </Heading.One>
                <Heading.Two transform="uppercase" orientation="vertical">
                    Heading sample
                </Heading.Two>
                <Heading.Three transform="uppercase" orientation="vertical">
                    Heading sample
                </Heading.Three>
                <Heading.Four transform="uppercase" orientation="vertical">
                    Heading sample
                </Heading.Four>
                <Heading.Five transform="uppercase" orientation="vertical">
                    Heading sample
                </Heading.Five>
                <Heading.Six transform="uppercase" orientation="vertical">
                    Heading sample
                </Heading.Six>
            </div>
            <div>
                asdasd
            </div>
        </div>
    );
}

export default HeaderSection;