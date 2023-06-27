import css from './main.module.css'
import {Route, Routes} from 'react-router-dom'
import Blog from "../../pag/blog/blog";
import Home  from '../../pag/home/home';
import Contacts from '../../pag/contacts/contacts';
import Portfolio from '../../pag/portfolio/portfolio';
import Service from '../../pag/service/Service';
import Posts from '../../pag/Post/Post';


function Main () {
    
    return (
        <div className={css.main}>
        <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/BLOG" element={<Blog />}/>
                <Route path="/CONTACTS" element={<Contacts />}/>
                <Route path="/Service" element={<Service />}/>
                <Route path="/PORTFOLIO" element={<Portfolio />}/>
                <Route path="/Post" element={<Posts />} />
            </Routes>
        </div>
    )
}

export default Main;