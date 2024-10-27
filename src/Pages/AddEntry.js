import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEntry = ({ entries = [], setEntries }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: Date.now(),
      title,
      location,
      date,
      description,
    };
    setEntries([...entries, newEntry]);
    navigate('/view-entries');
  };
  

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
    <div className="card">
      <div className="card-header">
        <h4>Add New Entry</h4>
      </div>
      <div className="card-body">
        <div className="form-group mb-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter the title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Enter the location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
             min={new Date().toISOString().split("T")[0]} 
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="4"
            placeholder="Enter a brief description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="d-flex justify-content-center mt-4">
        <div className="col-6">
          <button type="submit" className="btn-lg w-100 btn btn-outline-success btn-lg mt-3 hover-shadow">
            <i className="fa fa-plus" aria-hidden="true"></i> Add Entry
          </button>
        </div>
      </div>
      </div>
    </div>
  </form>
  );
};


export default AddEntry;
