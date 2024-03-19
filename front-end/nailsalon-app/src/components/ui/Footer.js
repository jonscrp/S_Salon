
const styleFooter = {
    padding:"10px",
    margin:"10px",
    border:"10px",
    gap:"30px",

}

function Footer(){
    return(  
        <div style={styleFooter}>
            <div><p>&#xa9; Copyright 2022 Nail Salon</p></div> 

       
        <footer style={{display:"grid", gridTemplateColumns:"auto auto auto",}}>

        <div>
            <h1>Contact Us</h1>
            <address>
                Some random Addres
            </address>
        
        </div>

        <div>
            <h1>Bussiness hours</h1>
            <ul>
                <li><b>Mon: </b>9am- 5pm</li>
                <li><b>Tue: </b>9am- 5pm</li>
                <li><b>Wed: </b>9am- 5pm</li>
                <li><b>Thu: </b>9am- 5pm</li>
                <li><b>Fri: </b>9am- 5pm</li>
                <li><b>Sat: </b>9am- 5pm</li>
                <li><b>Sun </b>9am- 5pm</li>
            </ul>
        </div>

        <div>
            <h1>Follow Us</h1>
        </div>

        </footer>
        </div> 
    );
}


export default Footer;