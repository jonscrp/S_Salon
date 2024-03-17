import {useState, useEffect} from 'react';


import StaffList from '../components/form/StaffList.js';
import StaffItem from '../components/form/StaffItem.js';

function Booking(){

  const [staff, setStaff] = useState(
    {
      name:"",
      specialty:"",
      email:""

    });

  // Populate with staff
    useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:9000/staff');
      const data = await response.json();
      console.log(data);   
    }


    //fetchData();

    }, []);

    return(
        <>
          <StaffList>
            
            <StaffItem name="John Doe" specialty="Nails" email="joeSam@NailSalon.com"></StaffItem>
            
          </StaffList>

        </>

    );


}

export default Booking;