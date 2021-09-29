import React from 'react';
import './StatusInspecs.css';
import { Doughnut } from 'react-chartjs-2';


function StatusInspecs() {
    return (
        <div className='status'>
            <p className='p1'>Inspeções</p>
            <p className='p2'>status do dia</p>
            <i className="fas fa-cog"></i>
            <Doughnut 
                className='rosca'
                data={{
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