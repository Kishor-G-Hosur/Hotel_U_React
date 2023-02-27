import '../Styles/footer.css'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer_logo">
            <h3>Booking.com</h3>
            </div>
            <div className="footer_links">
                <ul>
                    <li><a href="">Terms and Privacy Notice</a></li>
                    <li><a href="">Send us feedback</a></li>
                    <li><a href="">Help</a>
                    </li>
                </ul>
            </div>
            <div className="desc">
                <p>© 1996-2022, Booking.com, Inc. or its affiliates</p>
            </div>
            
        </div>
     );
}
export default Footer;