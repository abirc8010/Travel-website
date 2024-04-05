import Header from "../Header/Header.jsx"
import "../Flights/flight.css"
export default function(){
const indianFlights = [
  {
    id: 1,
    name: "IndiGo",
    number: "6E123",
    from: "Delhi",
    to: "Mumbai",
    depart: "10:00AM",
    arrive: "12:30PM",
    duration: "2 hours 30 minutes",
    price: 5000,
  },
  {
    id: 2,
    name: "Air India",
    number: "AI456",
    from: "Kolkata",
    to: "Bengaluru",
    depart: "08:15AM",
    arrive: "11:30AM",
    duration: "3 hours 15 minutes",
    price: 5500,
  },
  {
    id: 3,
    name: "SpiceJet",
    number: "SG789",
    from: "Chennai",
    to: "Hyderabad",
    depart: "09:30AM",
    arrive: "10:45AM",
    duration: "1 hour 15 minutes",
    price: 4000,
  },
  {
    id: 4,
    name: "GoAir",
    number: "G810",
    from: "Mumbai",
    to: "Delhi",
    depart: "11:45AM",
    arrive: "02:00PM",
    duration: "2 hours 15 minutes",
    price: 4800,
  },
  {
    id: 5,
    name: "Vistara",
    number: "UK567",
    from: "Jaipur",
    to: "Ahmedabad",
    depart: "07:00AM",
    arrive: "08:15AM",
    duration: "1 hour 15 minutes",
    price: 4200,
  },
  {
    id: 6,
    name: "AirAsia",
    number: "AK321",
    from: "Mangalore",
    to: "Chennai",
    depart: "03:30PM",
    arrive: "05:00PM",
    duration: "1 hour 30 minutes",
    price: 3800,
  },
  {
    id: 7,
    name: "GoFirst",
    number: "G123",
    from: "Lucknow",
    to: "Kolkata",
    depart: "12:30PM",
    arrive: "02:45PM",
    duration: "2 hours 15 minutes",
    price: 4500,
  },
  {
    id: 8,
    name: "AirAsia India",
    number: "I567",
    from: "Delhi",
    to: "Chandigarh",
    depart: "09:00AM",
    arrive: "10:00AM",
    duration: "1 hour",
    price: 3500,
  },
  {
    id: 9,
    name: "IndiGo",
    number: "E2472",
    from: "Kolkata",
    to: "Delhi",
    depart: "06:45AM",
    arrive: "08:55AM",
    duration: "2 hour 10 minutes",
    price: 3900,
  },
  {
    id: 10,
    name: "Air India",
    number: "AI234",
    from: "Pune",
    to: "Mumbai",
    depart: "11:00AM",
    arrive: "11:45AM",
    duration: "45 minutes",
    price: 3200,
  },
];


     return (
         <>
           <Header/>         
           <div className="flight-detail">
            <div className="flight-div">
               EXPLORE A COMPLETE<br></br> &nbsp;LIST OF FLIGHTS
               </div>
            <img className="flight-image" src="https://cdn.zeebiz.com/sites/default/files/2023/08/19/256870-air-india-reuters.jpg"></img>
           </div>
           <div className="flight-list" style={{ backgroundImage: "url('./static/images/airport.jpeg')" }}>
              <div className="flights">
                 {indianFlights.map(flight => (
                <div className="flightlist-div">
                    <div key={flight.id}>
                        <div className="name">{flight.name}</div>
                        <div className="number">({flight.number})</div>
                        <div className="location">
                        <div className="from">{flight.from}</div>
                        <div> -- </div>
                        <div className="to">{flight.to}</div>
                        </div>
                         <div className="location">
                        <div className="from">{flight.arrive}</div>
                        <div> -- </div>
                        <div className="to">{flight.depart}</div>
                        </div>
                          <div className="duration">{flight.duration}</div>
                        <div className="price">&#8377; {flight.price}</div>
                        <div className="book">
                        <button className="book-button">Book Now</button>
                        </div>
                    </div>                  
                </div>
                ))}
              </div>
           </div>
         </>        
     )
}