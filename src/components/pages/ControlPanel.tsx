import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Events from '../Events';
import Overview from '../Overview';
import StatusInspecs from '../StatusInspecs';
import StatusAP from '../StatusAP';
import Updates from '../Updates';
import Inspections from '../Inspections';


function ControlPanel() {
    return (
        <>
            <Sidebar />
            <Header />
            <Events />
            <Overview />
            <StatusInspecs />
            <StatusAP />
            <Updates />
            <Inspections />
        </>
    )
}

export default ControlPanel;
