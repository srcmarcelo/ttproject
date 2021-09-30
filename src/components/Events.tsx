import React from 'react';
import './Events.css';
import { Bar, defaults } from 'react-chartjs-2';

defaults.plugins.legend.position = 'bottom';
defaults.plugins.legend.align = 'start';
defaults.plugins.legend.labels.boxWidth = 10;
defaults.scale.grid.color = '#FFFFFF';
defaults.scale.display = false;


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
            <Bar 
                className='barra'
                data={{
                    labels: ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
                    datasets: [
                        {
                            label: 'realizadas',
                            data: [3, 13, 12, 5, 14, 7, 8],
                            backgroundColor: [
                                '#4B9EEA'
                            ]
                        },
                        {
                            label: 'pendentes',
                            data: [2, 6, 7, 7, 8, 4, 10],
                            backgroundColor: [
                                '#C00808'
                            ]
                        },
                        {
                            label: 'canceladas',
                            data: [5, 2, 8, 9, 4, 2, 12],
                            backgroundColor: [
                                '#A91B79'
                            ]
                        }
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                }}
            
            />
        </div>
    )
}

export default Events;