import React from 'react';
import './Updates.css';
import { Table, Comp, Comp1, Comp2, Tlt, Lbl1, Lbl2, Form1, Sit } from './table.styled';

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
            <Table>
                <Comp>
                    <Comp1>
                        <Tlt>Nome do plano de ação</Tlt>
                        <Lbl1>responsável: Bruno Barros</Lbl1>
                    </Comp1>
                    <Comp2>
                        <Form1>
                            <form> 
                                <Sit list='sits'></Sit>
                            </form>
                            <datalist id='sits'>
                                <option>pendente</option> <option>realizado</option>
                            </datalist>
                        </Form1>
                        <Lbl2>10:45 10/10/10</Lbl2>
                    </Comp2>
                </Comp>
                <Comp>
                    <Comp1>
                        <Tlt>Nome do plano de ação</Tlt>
                        <Lbl1>responsável: Bruno Barros</Lbl1>
                    </Comp1>
                    <Comp2>
                        <Form1>
                            <form> 
                                <Sit list='sits'></Sit>
                            </form>
                            <datalist id='sits'>
                                <option>pendente</option> <option>realizado</option>
                            </datalist>
                        </Form1>
                        <Lbl2>10:45 10/10/10</Lbl2>
                    </Comp2>
                </Comp>
                <Comp>
                    <Comp1>
                        <Tlt>Nome do plano de ação</Tlt>
                        <Lbl1>responsável: Bruno Barros</Lbl1>
                    </Comp1>
                    <Comp2>
                        <Form1>
                            <form> 
                                <Sit list='sits'></Sit>
                            </form>
                            <datalist id='sits'>
                                <option>pendente</option> <option>realizado</option>
                            </datalist>
                        </Form1>
                        <Lbl2>10:45 10/10/10</Lbl2>
                    </Comp2>
                </Comp>
                <Comp>
                    <Comp1>
                        <Tlt>Nome do plano de ação</Tlt>
                        <Lbl1>responsável: Bruno Barros</Lbl1>
                    </Comp1>
                    <Comp2>
                        <Form1>
                            <form> 
                                <Sit list='sits'></Sit>
                            </form>
                            <datalist id='sits'>
                                <option>pendente</option> <option>realizado</option>
                            </datalist>
                        </Form1>
                        <Lbl2>10:45 10/10/10</Lbl2>
                    </Comp2>
                </Comp>
                <Comp>
                    <Comp1>
                        <Tlt>Nome do plano de ação</Tlt>
                        <Lbl1>responsável: Bruno Barros</Lbl1>
                    </Comp1>
                    <Comp2>
                        <Form1>
                            <form> 
                                <Sit list='sits'></Sit>
                            </form>
                            <datalist id='sits'>
                                <option>pendente</option> <option>realizado</option>
                            </datalist>
                        </Form1>
                        <Lbl2>10:45 10/10/10</Lbl2>
                    </Comp2>
                </Comp>
                <Comp>
                    <Comp1>
                        <Tlt>Nome do plano de ação</Tlt>
                        <Lbl1>responsável: Bruno Barros</Lbl1>
                    </Comp1>
                    <Comp2>
                        <Form1>
                            <form> 
                                <Sit list='sits'></Sit>
                            </form>
                            <datalist id='sits'>
                                <option>pendente</option> <option>realizado</option>
                            </datalist>
                        </Form1>
                        <Lbl2>10:45 10/10/10</Lbl2>
                    </Comp2>
                </Comp>
                <Comp>
                    <Comp1>
                        <Tlt>Nome do plano de ação</Tlt>
                        <Lbl1>responsável: Bruno Barros</Lbl1>
                    </Comp1>
                    <Comp2>
                        <Form1>
                            <form> 
                                <Sit list='sits'></Sit>
                            </form>
                            <datalist id='sits'>
                                <option>pendente</option> <option>realizado</option>
                            </datalist>
                        </Form1>
                        <Lbl2>10:45 10/10/10</Lbl2>
                    </Comp2>
                </Comp>
                <Comp>
                    <Comp1>
                        <Tlt>Nome do plano de ação</Tlt>
                        <Lbl1>responsável: Bruno Barros</Lbl1>
                    </Comp1>
                    <Comp2>
                        <Form1>
                            <form> 
                                <Sit list='sits'></Sit>
                            </form>
                            <datalist id='sits'>
                                <option>pendente</option> <option>realizado</option>
                            </datalist>
                        </Form1>
                        <Lbl2>10:45 10/10/10</Lbl2>
                    </Comp2>
                </Comp>
            </Table>            
        </div>
    )
}

export default Updates;
