import React, { useState } from 'react';
import { useDayPicker } from 'react-day-picker';
import Footer from '../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';

import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointments date={date}></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;