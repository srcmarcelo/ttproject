import React from 'react';
import './Events.css';

function Events() {
    return (
        <div className='events'>
            <p>Histórico de eventos</p>
            <form> 
                <input className="time" id="time" list="times"></input>
            </form>
            <datalist id="times">
                <option>diário</option> <option>semanal</option> <option>mensal</option>
            </datalist>
            <i className="fas fa-cog"></i>
        </div>
    )
}

export default Events;