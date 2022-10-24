export class Flight {
    id?: number;
    flight_name: string;
    flight_number: string;
    source: string;
    destination: string;
    dept_date: string;
    arrival_date: string;
    dept_time: string;
    arrival_time: string;
    b_seats: number;
    e_seats: number;
    b_price: number;
    e_price: number;
    vendor: {
        id?: number;
        name?: string;
    }

}