import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

 class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <ul>
                        <li>
                            <NavLink></NavLink>
                        </li>
                        <li>
                        <NavLink></NavLink>
                        </li>
                    </ul>
                </header>

                
            </div>
        )
    }
}
export default Header