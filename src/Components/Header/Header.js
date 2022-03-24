import React from 'react';
import {NavLink, withRouter} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/herologo.svg';
import {ReactComponent as Home} from '../../assets/homesvg.svg';
import {ReactComponent as Explore} from '../../assets/aboutsvgfinal.svg';
import {ReactComponent as Writeup} from '../../assets/heads.svg';
import './header.css';
const Header = ({history,isLogged}) =>{
    const handleClick=() =>{
        history.push('/')
        isLogged(false)
    }
    return(
        <nav>
            <div className='div-header'>
                <div className='div-svg' onClick={() => history.push('/')}>
                    <Logo className='logo-div'/>
                </div>
                <div className='header-class'>
                    <NavLink exact to='/' activeClassName='active'><Home className='div-svg'/></NavLink>
                    <NavLink exact to='/explore' activeClassName='active'><Explore className='div-svg'/></NavLink>
                    <NavLink exact to='/writeup' activeClassName='active'><Writeup className='div-svg'/></NavLink>
                    <button className='button-header' onClick={handleClick}>Log out</button>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Header);