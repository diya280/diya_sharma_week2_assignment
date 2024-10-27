import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const EditEntry = ({ entries, setEntries }) => {
  const { id } = useParams(); 
  const location = useLocation(); 
  const navigate = useNavigate(); 

  const [entryData, setEntryData] = useState({
    title: '',
    location: '',
    date: '',
    description: ''
  });

  useEffect(() => {
    const entry = location.state?.entry;
    if (entry) {
      setEntryData(entry);
    } else {
      console.error("Entry not found!");
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntryData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setEntries(prevEntries => 
      prevEntries.map(entry => 
        entry.id === Number(id) ? { ...entry, ...entryData } : entry
      )
    );

    navigate('/view-entries');
  };

  return (
    <div className="container">
      <h2>Edit Entry</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={entryData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            className="form-control"
            value={entryData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            value={entryData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={entryData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Update Entry</button>
      </form>
    </div>
  );
};

export default EditEntry;
