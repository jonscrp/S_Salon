import {useState, useEffect} from 'react';


import StaffList from '../components/form/StaffList.js';
import StaffItem from '../components/form/StaffItem.js';

function Booking(){

  const [staff, setStaff] = useState([]);

  // Populate with staff
  useEffect(() => {
  const fetchData = async() => {
    const response = await fetch('http://localhost:8000/staff');
    const data = await response.json();
    console.log(data[0])
    setStaff(data);   
  }
  fetchData();
  },[]);


    return (
      <>
          {staff.length > 0 ? (
              <>
                  <h1 className='Something'>{staff[0].name}</h1>
                  <StaffList>
                      {staff.map((staffMember, index) => (
                          <StaffItem
                              key={index}
                              name={staffMember.fname}
                              specialty={staffMember.speciality}
                              email={staffMember.email}
                          />
                      ))}
                  </StaffList>
              </>
          ) : (
              <p>Loading...</p>
          )}
      </>
  );
      

}

export default Booking;