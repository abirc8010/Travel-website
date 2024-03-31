import Header from "../Header/Header.jsx"
import "../Trains/train.css"
export default function(){
 const indianTrains = [
  {
    id: 1,
    name: "Rajdhani Express",
    number: 12309,
    from: "New Delhi",
    to: "Mumbai",
    depart: "08:00AM",
    arrive: "08:00PM",
    duration: "12 hours",
    price: 2000,
  },
  {
    id: 2,
    name: "Shatabdi Express",
    number: 12002,
    from: "Kolkata",
    to: "Bengaluru",
    depart: "06:30AM",
    arrive: "09:00PM",
    duration: "14.5 hours",
    price: 1500,
  },
  {
    id: 3,
    name: "Duronto Express",
    number: 12213,
    from: "Chennai",
    to: "Hyderabad",
    depart: "10:15AM",
    arrive: "04:30PM",
    duration: "6 hours 15 minutes",
    price: 1800,
  },
  {
    id: 4,
    name: "Gatimaan Express",
    number: 12050,
    from: "Agra",
    to: "Delhi",
    depart: "08:10AM",
    arrive: "09:50AM",
    duration: "1 hour 40 minutes",
    price: 1200,
  },
  {
    id: 5,
    name: "Garib Rath",
    number: 12909,
    from: "Jaipur",
    to: "Ahmedabad",
    depart: "05:30AM",
    arrive: "11:45AM",
    duration: "6 hours 15 minutes",
    price: 800,
  },
  {
    id: 6,
    name: "Konkan Kanya Express",
    number: 10111,
    from: "Mangalore",
    to: "Mumbai",
    depart: "08:00PM",
    arrive: "08:00AM",
    duration: "12 hours",
    price: 1600,
  },
  {
    id: 7,
    name: "Humsafar Express",
    number: 22920,
    from: "Lucknow",
    to: "Kolkata",
    depart: "07:45PM",
    arrive: "08:30AM",
    duration: "12 hours 45 minutes",
    price: 1700,
  },
  {
    id: 8,
    name: "Sampark Kranti Express",
    number: 12629,
    from: "Delhi",
    to: "Chandigarh",
    depart: "06:00AM",
    arrive: "10:30AM",
    duration: "4 hours 30 minutes",
    price: 1000,
  },
  {
    id: 9,
    name: "Poorva Express",
    number: 12303,
    from: "Kolkata",
    to: "New Delhi",
    depart: "06:45AM",
    arrive: "01:30PM",
    duration: "6 hours 45 minutes",
    price: 1300,
  },
  {
    id: 10,
    name: "Deccan Queen",
    number: 12123,
    from: "Pune",
    to: "Mumbai",
    depart: "07:15AM",
    arrive: "10:30AM",
    duration: "3 hours 15 minutes",
    price: 900,
  },
];

     return (
         <>
           <Header/>         
           <div className="train-detail">
            <div className="train-div">
               EXPLORE A COMPLETE<br></br> &nbsp;&nbsp;LIST OF TRAINS
               </div>
            <img className="train-image" src="https://imgeng.jagran.com/images/2022/apr/railways1650074183526.jpg"></img>
           </div>
           <div className="train-list">
              <div className="trains">
                 {indianTrains.map(train => (
                <div className="trainlist-div">
                    <div key={train.id}>
                        <div className="name">{train.name}</div>
                        <div className="number">({train.number})</div>
                        <div className="location">
                        <div className="from">{train.from}</div>
                        <div> -- </div>
                        <div className="to">{train.to}</div>
                        </div>
                         <div className="location">
                        <div className="from">{train.arrive}</div>
                        <div> -- </div>
                        <div className="to">{train.depart}</div>
                        </div>
                          <div className="duration">{train.duration}</div>
                        <div className="price">&#8377; {train.price}</div>
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