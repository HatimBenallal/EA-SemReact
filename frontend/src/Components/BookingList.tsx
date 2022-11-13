import {User} from '../model/User'
import {Booking} from '../model/Booking'
import React from 'react'
import { ChangeEvent, useEffect, useState } from 'react'
import * as userService from '../Service/UserService'
import * as bookingService from '../Service/BookingService'
import ListItem from './ListItem';

interface Props {
    booking:Booking
}

export const UserList:React.FC = (/*{booking}: Props*/) => {

  const [bookings, setBookings] = useState<any[]>([]);
  

  const loadBookings = async () => {
    const res = await bookingService.getAllBooking();
    setBookings(res.data);
  }
  
  useEffect(() => {
    loadBookings()
  }, [])

  
  return (
    <div className="App">
      {bookings.map((booking) => {
        return(
          <ListItem booking={booking} key={booking._id}/>
        );
      })}
    </div>
  );
}
export default BookingList;