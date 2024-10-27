import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ViewEntries = ({ entries, setEntries }) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const handleEdit = (entry) => {
    navigate(`/edit/${entry.id}`, { state: { entry } }); 
  };
  
  return (
    <div>
      {entries.length === 0 ? (
       <div className="d-flex justify-content-center align-items-center min-vh-100">
       <div className="bg-dark text-white col-6 text-center">
     <p>No entries found. Add a new travel log to get started!</p>
   </div>
  </div>
) : (
        <ul className="list-group">
          {entries.map((entry) => (
            <li key={entry.id} className="list-group-item">
              <h5>{entry.title}</h5>
              <p>{entry.location} - {entry.date}</p>
              <p>{entry.description}</p>
              <div className="row"   >      
                <div className="col-auto"> 
                <button className="btn btn-warning me-2" onClick={() => handleEdit(entry)}>
                <FontAwesomeIcon icon={faEdit} />
                 &nbsp; Edit</button>
           </div>
        <div className="col-auto">
          <button className="btn btn-danger" onClick={() => handleDelete(entry.id)}>
          <FontAwesomeIcon icon={faTrashAlt} />
          &nbsp; Remove</button>
        </div>
      </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewEntries;
