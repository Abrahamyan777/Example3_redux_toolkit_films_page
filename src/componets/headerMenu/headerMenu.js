import css from './headerMenu.module.css'
import {NavLink} from "react-router-dom";


function HeaderMenu (){
    return (
        <ul className={css.list}>
            <li className="">
                <NavLink to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="BLOG">
                    Tv Shows
                </NavLink>
            </li>
            <li>
                <NavLink to="CONTACTS">
                    Web Shows
                </NavLink>
            </li>
            <li>
                <NavLink to="Service">
                    Channels
                </NavLink>
            </li> 
            <li>
                <NavLink to="PORTFOLIO">
                    Movies
                </NavLink>
            </li>
            <li>
                <NavLink to="TodoList">
                    Music
                </NavLink>
            </li>
            <li>
                <NavLink to="Post">
                            Buzz
                </NavLink>
            </li>
        </ul>
    )
}

export default HeaderMenu ;