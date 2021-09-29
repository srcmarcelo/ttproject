import React from 'react';
import './Updates.css';

function Updates() {
    return (
        <div className='updates'>
            <p className='p1'>Planos de Ação</p>
            <p className='p2'>atualizações</p>
            <i className="fas fa-cog"></i>
            <input className='search1'></input>
            <form> 
                <input className="situation" id="situation" list="situations"></input>
            </form>
            <datalist id="situations">
                <option>concluído</option> <option>pendente</option> <option>cancelado</option>
            </datalist>
        </div>
    )
}

export default Updates;
