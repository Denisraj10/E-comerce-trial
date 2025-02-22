import React, { useState } from 'react';

function Frompage()  {

  const [detail, setDetail] = useState({
    name: '',age: '',dateofbrith:'',class: '',   subject: '',  bloodGroup: '',  religion: '',    caste: '',
    dalitChristian: '0',
    fatherName: '',
    parentOccupation: '',
    parentAddress: '',
    parentMobileNo: '', studentMobileNo: '', pincode: '',
    previousSchool: '',
    residentLastYear: '0',
    previousHostelName: '',
    previousHostelPlace: '',
  })
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails(prevState => ({
        ...prevState,
        [name]: value  
    }));
};

const handleImageChange = (e) => {
  const file = e.target.files[0];
  setImage(file);

  const reader = new FileReader();
  reader.onloadend = () => {
    setPreviewUrl(reader.result);
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
    setPreviewUrl('');
  }
};

  
  return (

    <div >
    <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

    <div className='flex flex-col gap-1'>
        <label  htmlFor="image" className='text-sm font-medium mb-1'>Photo:</label>
        <input
          type="file"
          onChange={handleImageChange}
        />
      </div>
      {previewUrl && (
        <div>
          <img src={previewUrl} alt="Preview" style={{ maxWidth: '200px', maxHeight: '100px' }} />
        </div>
      )}

<div className='flex flex-col gap-1'>
      <label htmlFor="name" className='text-sm font-medium mb-1'>Name:</label>
    <input required type="text"
     placeholder='your name '  
     name='name' value={detail.name} 
     onChange={handleChange} className='bg-green-700 border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
     </div>

     <div className='flex flex-col gap-1'>
     <label htmlFor="name" className='text-sm font-medium mb-1'>Date of Brith:</label>
    <input required type="date"
     placeholder='your dob '  
     name='dateofbrith' value={detail.dateofbrith} 
     onChange={handleChange} className='bg-green-700 border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
     </div>

     <div className='flex flex-col gap-1'>

     <label htmlFor="Age" className='text-sm font-medium mb-1'>Age:</label>
    <input required type="number"
     placeholder='your age'  
     name='age' value={detail.age} 
     onChange={handleChange} className='border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
     </div>

     <div className='flex flex-col gap-1'>
     <label htmlFor="name" className='text-sm font-medium mb-1'>Class:</label>
    <input required type="text"
     placeholder='your class'  
     name='class' value={detail.class} 
     onChange={handleChange} className='border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
     </div>

     <div className='flex flex-col gap-1'>
     <label htmlFor="name" className='m-3'>Subject:</label>
    <input required type="text"
     placeholder='your subject'  
     name='subject' value={detail.subject} 
     onChange={handleChange} className='border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
     </div>

     <div className='flex flex-col gap-1'>
     <label htmlFor="name" className='m-3'>Religion:</label>
    <input required type="text"
     placeholder='your religion '  
     name='religion' value={detail.religion} 
     onChange={handleChange} className='border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
     </div>

     <div className='flex flex-col gap-1'>
     <label htmlFor="name" className='m-3'>caste:</label>
    <input required type="text"
     placeholder='your caste '  
     name='caste' value={detail.caste} 
     onChange={handleChange} className='bg-green-700 border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
     </div>

     <div className='flex flex-col gap-1'>
     <label htmlFor="name" className='text-sm font-medium mb-1'>Father Name:</label>
    <input required type="text"
     placeholder='your father name '  
     name='fathername' value={detail.fathername} 
     onChange={handleChange} className='bg-green-700 border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
     
     </div>
     <div className='flex flex-col gap-1'>
     <label htmlFor="name" className='text-sm font-medium mb-1'>parent occupation:</label>
    <input required type="text"
     placeholder='parent occupation '  
     name='parentOccupation' value={detail.parentOccupation} 
     onChange={handleChange} className='border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
     </div>
     <div className='flex flex-col gap-1'>
     <label htmlFor="name" className='text-sm font-medium mb-1'>parent address:</label>
    <input required type="text"
     placeholder='your adress '  
     name='parentAddress' value={detail.parentAddress} 
     onChange={handleChange} className='border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
     </div>

     <div className='flex flex-col gap-1'>
     <label htmlFor="name" className='text-sm font-medium mb-1'>parent phone no:</label>
    <input required type="text"
     placeholder='parent mobile no '  
     name='parentMobileNo' value={detail.parentMobileNo} 
     onChange={handleChange} className='border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
     </div>

     <div className='flex flex-col gap-1'>
     <label htmlFor="name" className='text-sm font-medium mb-1'>student Mobile no:</label>
    <input required type="text"
     placeholder='your number'  
     name='studentMobileNo' value={detail.studentMobileNo} 
     onChange={handleChange} className='border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
     </div>

     <div className='flex flex-col gap-1'>
     <label htmlFor="name" className='text-sm font-medium mb-1'>previous School:</label>
    <input required type="text"
     placeholder='your previousSchool '  
     name='previousSchool' value={detail.previousSchool} 
     onChange={handleChange} className='border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
       </div>

       <div className='flex flex-col gap-1'>
       <label htmlFor="name" className='text-sm font-medium mb-1'>resident Last Year:</label>
    <input required type="text"
     placeholder='resident Last Year (yes or no) '  
     name='residentLastYear' value={detail.residentLastYear} 
     onChange={handleChange} className='border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
       </div>
    <div className='flex flex-col gap-1'>
       <label htmlFor="name" className='text-sm font-medium mb-1'>previous Hostel Place:</label>
    <input required type="text"
     placeholder='previous Hostel Place '  
     name='previousHostelPlace' value={detail.previousHostelPlace} 
     onChange={handleChange} className=' bg-green-700 border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' />
       </div> 
     <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 flex justify-center mt-4">
        <button type="submit" className='bg-green-900 text-black px-6 py-2 rounded hover:bg-green-900 transition'>SUBMIT</button>
          
        </div>
    </form>
      
      




    </div>
  )
};

export default Frompage