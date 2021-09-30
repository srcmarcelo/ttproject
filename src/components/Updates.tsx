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
            <div className='table'>
                <div className='comp'>
                    <h1 className='tlt'>Nome do plano de ação</h1>
                    <p className='lbl'>resposável: Bruno Barros</p>
                    <form> 
                        <input className="sit" id="sit" list="sits"></input>
                    </form>
                    <datalist id='sits'>
                        <option>pendente</option> <option>realizado</option>
                    </datalist>
                    <p className='lbl2'>10:45 10/10/10</p>
                </div>
                <div className='comp'>
                    <h1 className='tlt'>Nome do plano de ação</h1>
                    <p className='lbl'>resposável: Bruno Barros</p>
                    <form> 
                        <input className="sit" id="sit" list="sits"></input>
                    </form>
                    <datalist id='sits'>
                        <option>pendente</option> <option>realizado</option>
                    </datalist>
                    <p className='lbl2'>10:45 10/10/10</p>
                </div>
                <div className='comp'>
                    <h1 className='tlt'>Nome do plano de ação</h1>
                    <p className='lbl'>resposável: Bruno Barros</p>
                    <form> 
                        <input className="sit" id="sit" list="sits"></input>
                    </form>
                    <datalist id='sits'>
                        <option>pendente</option> <option>realizado</option>
                    </datalist>
                    <p className='lbl2'>10:45 10/10/10</p>
                </div>
                <div className='comp'>
                    <h1 className='tlt'>Nome do plano de ação</h1>
                    <p className='lbl'>resposável: Bruno Barros</p>
                    <form> 
                        <input className="sit" id="sit" list="sits"></input>
                    </form>
                    <datalist id='sits'>
                        <option>pendente</option> <option>realizado</option>
                    </datalist>
                    <p className='lbl2'>10:45 10/10/10</p>
                </div>
                <div className='comp'>
                    <h1 className='tlt'>Nome do plano de ação</h1>
                    <p className='lbl'>resposável: Bruno Barros</p>
                    <form> 
                        <input className="sit" id="sit" list="sits"></input>
                    </form>
                    <datalist id='sits'>
                        <option>pendente</option> <option>realizado</option>
                    </datalist>
                    <p className='lbl2'>10:45 10/10/10</p>
                </div>
                <div className='comp'>
                    <h1 className='tlt'>Nome do plano de ação</h1>
                    <p className='lbl'>resposável: Bruno Barros</p>
                    <form> 
                        <input className="sit" id="sit" list="sits"></input>
                    </form>
                    <datalist id='sits'>
                        <option>pendente</option> <option>realizado</option>
                    </datalist>
                    <p className='lbl2'>10:45 10/10/10</p>
                </div>
                <div className='comp'>
                    <h1 className='tlt'>Nome do plano de ação</h1>
                    <p className='lbl'>resposável: Bruno Barros</p>
                    <form> 
                        <input className="sit" id="sit" list="sits"></input>
                    </form>
                    <datalist id='sits'>
                        <option>pendente</option> <option>realizado</option>
                    </datalist>
                    <p className='lbl2'>10:45 10/10/10</p>
                </div>
                <div className='comp'>
                    <h1 className='tlt'>Nome do plano de ação</h1>
                    <p className='lbl'>resposável: Bruno Barros</p>
                    <form> 
                        <input className="sit" id="sit" list="sits"></input>
                    </form>
                    <datalist id='sits'>
                        <option>pendente</option> <option>realizado</option>
                    </datalist>
                    <p className='lbl2'>10:45 10/10/10</p>
                </div>
            </div>
        </div>
    )
}

export default Updates;
