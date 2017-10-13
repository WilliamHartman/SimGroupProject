import React from 'react';
import { Link } from 'react-router-dom';
import './BinList.css';
import logo from '../../img/logo.png';

export default function BinList(props) {

    const binID = props.match.params.id;

    return (
        <div className='binlist_main_container'>
            <div className='binlist_header'>
                <div className='binlist_logo'>
                    <img src={logo} />
                </div>
                <div className='binlist_shelf_header'>
                    <h1>Shelf {binID}</h1>
                </div>
            </div>
            <div className='binlist_content'>
                <div className='filler'></div>
                <div className='binlist_button_container'>
                    <Link to={`/bin/${binID}1`} ><button className='binlist_links'>Bin 1</button></Link>
                    <Link to={`/bin/${binID}2`} ><button className='binlist_links'>Bin 2</button></Link>
                    <Link to={`/bin/${binID}3`} ><button className='binlist_links'>Bin 3</button></Link>
                    <Link to={`/bin/${binID}4`} ><button className='binlist_links'>Bin 4</button></Link>
                </div>
            </div>
        </div>
    )

}