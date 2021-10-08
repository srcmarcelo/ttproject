import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Events from '../Events';
import Overview from '../Overview';
import StatusInspecs from '../StatusInspecs';
import StatusAP from '../StatusAP';
import Updates from '../Updates';
import Inspections from '../Inspections';
import './ControlPanel.css';


function ControlPanel() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <div className='sidebar'>
                <div className='elipse' onClick={handleClick}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            <div className={click ? 'menu' : 'menu-cancel'}>
                <Link to='/' className='menu-links' onClick={handleClick}>
                    <i className={click ? 'fas fa-chart-bar' : 'menu-cancel'}></i>
                    <h1 className={click ? 'menu-item' : 'menu-cancel'}>Painel de Controle</h1>
                </Link>
            </div>
            <div className={click ? 'arrow' : 'menu-cancel'} onClick={handleClick}>
                <i className="fas fa-chevron-left"></i>
            </div>
            <div className={click ? 'MenuCompsContainer' : 'CompsContainer'}>
                <Header />
                <Events />
                <Overview />
                <StatusInspecs />
                <StatusAP />
                <Updates />
                <Inspections />
            </div>
        </>
    )
}

export default ControlPanel;
