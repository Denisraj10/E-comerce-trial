import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminPage() {
  const [forms, setForms] = useState([]);
  

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getForms');
      setForms(response.data);
    } catch (error) {
      console.error('Error fetching forms:', error);
    }
  };

  return (
    <div className="p-8">
       <div>
        <h1 className='text-2xl font-bold text-center text-green-500 mb-4 bg-black p-5 '>NH HOSTEL APPLICATION FROM</h1>
    </div>
      <h1 className="text-3xl font-bold mb-4">Admin page</h1>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Submited forms</h2>
        {forms.length === 0 ? (
          <p>No forms submitted yet.</p>
        ) : (
          forms.map((form, index) => (
            <div key={index} className="border p-4 mt-4">
               {form.image && (
                <img
                  src={`data:image/jpeg;base64,${form.image}`}
                  alt="Student"
                  style={{ maxWidth: '100px' }}
                />
              )}
              <p>Name: {form.name}</p>
              <p>Age: {form.age}</p>
              <p>Date of Birth: {form.dateofbrith}</p>
              <p>Class: {form.class}</p>
              <p>Subject: {form.subject}</p>
              <p>Blood Group: {form.bloodGroup}</p>
              <p>Religion: {form.religion}</p>
              <p>Caste: {form.caste}</p>
              <p>Dalit Christian: {form.dalitChristian}</p>
              <p>Father Name: {form.fatherName}</p>
              <p>Parent Occupation: {form.parentOccupation}</p>
              <p>Parent Address: {form.parentAddress}</p>
              <p>Parent Mobile No: {form.parentMobileNo}</p>
              <p>Student Mobile No: {form.studentMobileNo}</p>
              <p>Pincode: {form.pincode}</p>
              <p>Previous School: {form.previousSchool}</p>
              <p>Resident Last Year: {form.residentLastYear}</p>
              <p>Previous Hostel Name: {form.previousHostelName}</p>
              <p>Previous Hostel Place: {form.previousHostelPlace}</p>
          
              <button className='bg-red-500 rounded-md p-2 m-3 mt-5 hover:text-black text-white' >REJECT</button>
              <button className='bg-green-500 rounded-md p-2 m-3 hover:text-black text-white'>SELECT</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AdminPage;