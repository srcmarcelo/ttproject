import React from 'react';
import './Inspections.css';

function Inspections() {
    return (
        <div className='inspections'>
            <p>Inspeções agendadas</p>
            <form> 
                <input className="time2" id="time" list="times"></input>
            </form>
            <datalist id="times">
                <option>diário</option> <option>semanal</option> <option>mensal</option>
            </datalist>
            <input className='search2' placeholder='Pesquise'></input>
        </div>
    )
}

export default Inspections;
