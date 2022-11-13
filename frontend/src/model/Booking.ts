import { User } from "../model/User";

export interface Booking {
    _id?: string;
    name: string;
    user: User;
    
}
export {};