import React from 'react';
import './Overview.css';
import { Doughnut } from 'react-chartjs-2';

function Overview() {
    return (
        <div className='over'>
            <p className='p1'>Planos de Ação</p>
            <p className='p2'>visão geral</p>
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

export default Overview;
