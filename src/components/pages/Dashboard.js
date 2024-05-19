import { useEffect, useState } from 'react';
import DashboardCard from '../cards/DashboardCard'; // Assuming you have a Card component
import axios from 'axios';

const Dashboard = () => {
    const [users, setusers] = useState([]);
    const [appointments, setAppointments] = useState([]);

    useEffect(
        () => {
            axios.get('http://localhost:5000/appointments')
                .then(response => setAppointments(response.data.length))
                .catch(error => console.error('Error fetching doctors:', error));

            axios.get('http://localhost:5000/allusers')
                .then(response => setusers(response.data.length))
                .catch(error => console.error('Error fetching doctors:', error));
        }, []);


    return (
        <div className='admin-section'>



            <DashboardCard
            icon={ <i class="ri-calendar-line"></i> }
                title={"Total Appointments"}
                value={appointments}

            />
            <DashboardCard
            icon={ <i class="ri-user-fill"></i> }
                title={"Total Users"}
                value={users}

            />



        </div>
    )
};

export default Dashboard;