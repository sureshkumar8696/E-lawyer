import React, { useState} from 'react';
// import { navigate } from '@reach/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Client_home.css';

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, age, dob,phone, gender };
    fetch('https://e-lawyer-auth-default-rtdb.firebaseio.com/details.json', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      toast.success('Form submitted successfully!');
      setTimeout(() => {
        window.location.href = '/main'; // switch to /main page after 3 seconds
      }, 2000);
    })
    .catch(error => {
      console.error('Error:', error);
      // handle error if needed
    });
    setName('');
    setAge('');
    setDob('');
    setGender('');
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      
      <label htmlFor="age">Age:</label>
      <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
      
      <label htmlFor="phone">Phone Number:</label>
  <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <label htmlFor="dob">Date of Birth:</label>
      <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />

      <label htmlFor="gender">Gender:</label>
      <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
