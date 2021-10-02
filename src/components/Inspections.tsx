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
            <div className='InspecsTable'>
                <div className='Header'>
                    <ul className='elements'>
                        <li className='element1'>NOME</li>
                        <li className='element2'>PLANEJADO</li>
                        <li className='element3'>REALIZADO</li>
                        <li className='element4'>ÚLTIMA ATUALIZAÇÃO</li>
                    </ul>
                </div>
                <div className='InspecsContainer'>
                    <ul className='elements2'>
                        <li className='cont1'>Larissa Silva Goncalves</li>
                        <li className='planed'>10</li>
                        <li className='done'>10</li>
                        <li className='lastup'>08:10h 10/10/2010</li>
                    </ul>
                    <ul className='elements2'>
                        <li className='cont1'>Lucas Silva Santos</li>
                        <li className='planed'>10</li>
                        <li className='done'>10</li>
                        <li className='lastup'>08:10h 10/10/2010</li>
                    </ul>
                    <ul className='elements2'>
                        <li className='cont1'>Raissa Oliveira Araujo</li>
                        <li className='planed'>10</li>
                        <li className='done'>10</li>
                        <li className='lastup'>08:10h</li>
                    </ul>
                    <ul className='elements2'>
                        <li className='cont1'>Leila Dias Costa</li>
                        <li className='planed'>8</li>
                        <li className='done'>8</li>
                        <li className='lastup'>08:10h</li>
                    </ul>
                    <ul className='elements2'>
                        <li className='cont1'>Vitória Sousa Cavalcanti</li>
                        <li className='planed'>-</li>
                        <li className='done'>-</li>
                        <li className='lastup'>08:10h</li>
                    </ul>
                    <ul className='elements2'>
                        <li className='cont1'>Emily Araujo Oliveira</li>
                        <li className='planed'>4</li>
                        <li className='done'>4</li>
                        <li className='lastup'>08:10h</li>
                    </ul>
                    <ul className='elements2'>
                        <li className='cont1'>Nicolas Pereira Sousa</li>
                        <li className='planed'>2</li>
                        <li className='done'>2</li>
                        <li className='lastup'>08:10h</li>
                    </ul>
                    <ul className='elements2'>
                        <li className='cont1'>Laura Castro Gomes</li>
                        <li className='planed'>2</li>
                        <li className='done'>2</li>
                        <li className='lastup'>08:10h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Inspections;
