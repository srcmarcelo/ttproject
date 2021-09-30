import React from 'react';
import './StatusInspecs.css';
import { Doughnut, defaults } from 'react-chartjs-2';

defaults.plugins.legend.position = 'bottom';
defaults.plugins.legend.labels.boxWidth = 10;
defaults.plugins.legend.align = 'start';
defaults.plugins.tooltip.enabled = false;


function StatusInspecs() {
    return (
        <div className='status'>
            <p className='p1'>Inspeções</p>
            <p className='p2'>status do dia</p>
            <i className="fas fa-cog"></i>
            <Doughnut 
                className='rosca'
                data={{
                    labels: ['realizadas\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nhoje\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n10 min', 'em aberto\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nultimos 7 dias\n\n\n\n\n\n\n\n10 min', 'não realizadas\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nultimos 30 dias\n\n\n\n\n\n10 min'],
                    datasets: [
                        {
                            data: [58.6, 34.9, 6.5],
                            backgroundColor: [
                                '#7FC008',
                                '#DB8C28',
                                '#EB5757'
                            ]
                        }
                    ]
                }}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    )
}

export default StatusInspecs;
