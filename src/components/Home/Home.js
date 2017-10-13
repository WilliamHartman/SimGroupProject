import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../../img/logo.png'

export default function Home(props) {
    return (
        <div className='home_main_container'>
            <div className='home_header'>
                <div className='home_logo'>
                    <img src={logo} />
                    <h1>SHELFIE</h1>
                </div>
            </div>
            <div className='home_content'>
                <div className='home_button_container'>
                    <Link to='/binlist/A' ><button className='links'>Shelf A</button></Link>
                    <Link to='/binlist/B'><button className='links'>Shelf B</button></Link>
                    <Link to='/binlist/C' ><button className='links'>Shelf C</button></Link>
                    <Link to='/binlist/D' ><button className='links'>Shelf D</button></Link>
                </div>
            </div>
        </div>
    )

}





