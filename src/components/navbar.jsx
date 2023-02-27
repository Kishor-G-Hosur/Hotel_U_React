import '../Styles/navbar.css'

const Navbar = () => {
    return (  
        
        <div className="Navbar">
            <div className="logo">
            <h3>Booking.com</h3>
         </div>
        <div className="Navbar_list">
          <ul>
            <li><a href="">🏠Stay</a></li>
            <li><a href="">✈️Flights </a></li>
            <li><a href="">🏨Flight+Hotel</a></li>
            <li><a href="">🚘Car rental</a></li>
            <li><a href="">🌏Attration</a></li>
            <li><a href="">🚕Airport taxis</a></li>
          </ul>
        </div>
        </div>
    );
}
 
export default Navbar;