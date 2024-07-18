import React, {useState} from "react";
import './personalcom.css';

function PersonalForm({ onSubmit }){
    const [formData, setFormData] = useState({name : " ", email: " ", pno: "", address: ""})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return(
        <form onSubmit={handleSubmit} className="personal-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pno">Phone number:</label>
        <input
          type="text"
          id="pno"
          name="pno"
          value={formData.pno}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    );
}

export default PersonalForm;
