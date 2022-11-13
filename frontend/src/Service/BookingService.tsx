import axios from 'axios'
import {Booking} from '../model/Booking'

const API = 'http://localhost:5432/api'



export const getAllBooking = async () => {
    return await axios.get(`${API}/bookings`);
}
export {}

