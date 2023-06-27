import css from './header.module.css'
import HeaderMenu from '../headerMenu/headerMenu';



function Header() {
    return (
        <>
        <div className={css.header}>
            <div>
                <img  alt='' src='https://codervent.com/synplayer/assets/images/logo-4.png'/> 
            </div>
            <HeaderMenu/>
            <div>
                <span>
                    Icon
                </span>
            </div>
        </div>
        </>
    )
}

export default Header; 