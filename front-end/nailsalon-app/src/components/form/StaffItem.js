

function StaffItem(props) {
    const staffContainerStyles = {
        display:"flex",
        margin:"0px",
        border:"0px",
        padding:"10px",
        width:"auto",
        gap:"80px"
        
    } 

    const staffElementStyles = {
        flex:1,
        border:"2px",
        margin:"0px",
        padding:"10px",
        fontSize:"45px",
        width:"30%",
        height:"20%",
       
    }

    return (
        <>
        <div style={staffContainerStyles}> 
            <img  src= "staff1.jpg" alt="staff" style={{width:"30%", height:"20%", borderRadius:"56px"}}></img>
            <div style={staffElementStyles}>
            <p >Staff Name:{props.name}</p>
            <p >Specialty:{props.specialty}</p>
            <p >Email: joeSam@NailSalon.com:{props.email}</p>
            <button type="button" style={{fontSize:"45px", margin:"20px", padding:"23px", borderRadius:"56px"}}>Book Appointment</button>
            </div>
        </div>
        </>

    );

}

export default StaffItem;