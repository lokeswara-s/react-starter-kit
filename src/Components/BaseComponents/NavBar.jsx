import React from 'react';


const NavItem = (props)=>{
    return(
        <li>
            <a>                            
                {props.children}
            </a>
            {
                props.loaded &&
                <div></div>
            }
        </li>
    );
}

class NavBar extends React.Component{

    constructor(){
        super();
        this.state = {
            loaded: true
        }
    }

    componentDidMount(){

    }

    render(){
        return (
            <div className="navbar-react-001">
                <ul>
                    <NavItem loaded={this.state.loaded}>
                        Home
                    </NavItem>
                    <NavItem loaded={this.state.loaded}>
                        About
                    </NavItem>
                    <NavItem loaded={this.state.loaded}>
                        Docs
                    </NavItem>
                </ul>
            </div>
        );
    }
}

export default NavBar;