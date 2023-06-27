import React from 'react';
import Slider from '../../componets/Slider/Slider';
import css from './home.module.css'
import ImgSlider from "../../componets/ImgSlider/ImgSlider";
import {useDispatch, useSelector} from "react-redux";
import {filterByGenre} from "../../store/slices/filmsSlice";

const image_urls = [
    'https://lumiere-a.akamaihd.net/v1/images/ng_theterritory_keyart_vertical_4b14a73f.jpeg',
    'https://assets3.cbsnewsstatic.com/hub/i/r/2010/05/03/467508f5-a645-11e2-a3f0-029118418759/thumbnail/640x783/0e9ba358974bbf27f2371868ee8e516e/Avatar_bluray_box.jpg',
    'https://www.film.ru/sites/default/files/filefield_paths/rxyuhgu09aq01.jpg',
    'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg'
]

const image_urls2 = [
    'https://s8.vcdn.biz/static/f/4481550791/image.jpg/pt/r193x272x4',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8ko5Mi07TI7REJl2XKbe1TJBFobdDAbTla795d2mi1mh0mzfOChsFVVKJzvZJPwve_I&usqp=CAU',
    'https://www.film.ru/sites/default/files/filefield_paths/pirates_of_the_caribbean_dead_men_tell_no_tales_ver16_xlg.jpg',
    'https://www.film.ru/sites/default/files/filefield_paths/jack-sparrow.jpg'
]

const Home = () => {

    const {filtered} = useSelector(state => state.filmsReducer)
    // const state = useSelector(state => state.filmsReducer)
    const stateall = useSelector(state => state)

    


    const dispatch = useDispatch()

    console.log(filtered)
    // console.log(state);
    // console.log(stateall);


    return (
        <div className={css.homeBlock}>
            <Slider />
            <button onClick={({target}) => {
                dispatch(filterByGenre(target.textContent))
            }}>
                action
            </button>
            <button onClick={({target}) => {
                dispatch(filterByGenre(target.textContent))
            }}>
                fantastic
            </button>
            <div className={css.ImgSlider}>
                <ImgSlider image_urls={image_urls2} />
            </div>
            <div className={css.ImgSlider}>
                <ImgSlider image_urls={image_urls}/>
            </div>
            <div className={css.block}>
                <h3>Trending on TV</h3>
                <button>More Videos</button>
            </div>

            
        </div>
    );
};

export default Home;