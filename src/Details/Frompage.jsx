import React, { useEffect, useState } from "react";
import axios from "axios";

function Frompage() {
  const [detail, setDetail] = useState({
    name: "",
    age: "",
    dateofbrith: "",
    class: "",
    subject: "",
    bloodGroup: "",
    religion: "",
    caste: "",
    dalitChristian: "",
    fatherName: "",
    parentOccupation: "",
    parentAddress: "",
    parentMobileNo: "",
    studentMobileNo: "",
    pincode: "",
    previousSchool: "",
    residentLastYear: "",
    previousHostelName: "",
    previousHostelPlace: "",
  });
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getForms");
      setForms(response.data);
    } catch (error) {
      console.error("Error fetching forms:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prevDetail) => ({ ...prevDetail, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl("");
    }
  };

  const handleSubmit = async (e) => {
  
    const formData = new FormData();
    for (const key in detail) {
      formData.append(key, detail[key]);
    }
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post("http://localhost:5000/addForm", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Form submitted successfully:", response.data);
      fetchForms(); 
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="image" className="text-sm font-medium mb-1">
            Photo:
          </label>
          <input type="file" onChange={handleImageChange} />
        </div>
        {previewUrl && (
          <div>
            <img src={previewUrl} alt="Preview" style={{ maxWidth: "200px", maxHeight: "100px" }} />
          </div>
        )}

        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium mb-1">
            Name:
          </label>
          <input
            required
            type="text"
            placeholder="your name"
            name="name"
            value={detail.name}
            onChange={handleChange}
            className="bg-green-700 border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="dateofbrith" className="text-sm font-medium mb-1">
            Date of Birth:
          </label>
          <input
            required
            type="date"
            name="dateofbrith"
            value={detail.dateofbrith}
            onChange={handleChange}
            className="bg-green-700 border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="age" className="text-sm font-medium mb-1">
            Age:
          </label>
          <input
            required
            type="number"
            placeholder="your age"
            name="age"
            value={detail.age}
            onChange={handleChange}
            className="border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="class" className="text-sm font-medium mb-1">
            Class:
          </label>
          <input
            required
            type="text"
            placeholder="your class"
            name="class"
            value={detail.class}
            onChange={handleChange}
            className="border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="subject" className="text-sm font-medium mb-1">
            Subject:
          </label>
          <input
            required
            type="text"
            placeholder="your subject"
            name="subject"
            value={detail.subject}
            onChange={handleChange}
            className="border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="religion" className="text-sm font-medium mb-1">
            Religion:
          </label>
          <input
            required
            type="text"
            placeholder="your religion"
            name="religion"
            value={detail.religion}
            onChange={handleChange}
            className="border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="caste" className="text-sm font-medium mb-1">
            Caste:
          </label>
          <input
            required
            type="text"
            placeholder="your caste"
            name="caste"
            value={detail.caste}
            onChange={handleChange}
            className="bg-green-700 border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="fatherName" className="text-sm font-medium mb-1">
            Father Name:
          </label>
          <input
            required
            type="text"
            placeholder="your father name"
            name="fatherName"
            value={detail.fatherName}
            onChange={handleChange}
            className="bg-green-700 border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="parentOccupation" className="text-sm font-medium mb-1">
            Parent Occupation:
          </label>
          <input
            required
            type="text"
            placeholder="parent occupation"
            name="parentOccupation"
            value={detail.parentOccupation}
            onChange={handleChange}
            className="border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="parentAddress" className="text-sm font-medium mb-1">
            Parent Address:
          </label>
          <input
            required
            type="text"
            placeholder="your address"
            name="parentAddress"
            value={detail.parentAddress}
            onChange={handleChange}
            className="border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="parentMobileNo" className="text-sm font-medium mb-1">
            Parent Phone No:
          </label>
          <input
            required
            type="text"
            placeholder="parent mobile no"
            name="parentMobileNo"
            value={detail.parentMobileNo}
            onChange={handleChange}
            className="border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="studentMobileNo" className="text-sm font-medium mb-1">
            Student Mobile No:
          </label>
          <input
            required
            type="text"
            placeholder="your number"
            name="studentMobileNo"
            value={detail.studentMobileNo}
            onChange={handleChange}
            className="border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="previousSchool" className="text-sm font-medium mb-1">
            Previous School:
          </label>
          <input
            required
            type="text"
            placeholder="your previous school"
            name="previousSchool"
            value={detail.previousSchool}
            onChange={handleChange}
            className="border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="residentLastYear" className="text-sm font-medium mb-1">
            Resident Last Year:
          </label>
          <input
            required
            type="text"
            placeholder="resident last year (yes or no)"
            name="residentLastYear"
            value={detail.residentLastYear}
            onChange={handleChange}
            className="border rounded bg-green-700 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="previousHostelPlace" className="text-sm font-medium mb-1">
            Previous Hostel Place:
          </label>
          <input
            required
            type="text"
            placeholder="previous hostel place"
            name="previousHostelPlace"
            value={detail.previousHostelPlace}
            onChange={handleChange}
            className="bg-green-700 border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            SUBMIT
          </button>
        </div>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-bold">Submitted Forms</h2>
        {forms.map((form, index) => (
          <div key={index} className="border p-4 mt-4">
            <p>Name: {form.name}</p>
            {form.image && (
              <img src={`data:image/jpeg;base64,${form.image}`} alt="Student" style={{ maxWidth: "100px" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Frompage;