import React, { useState, useEffect } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roomNumber: '',
    dietaryRestrictions: '',
    vegetarian: false,
    mealPreference: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    roomNumber: '',
  });
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '3px',
      boxSizing: 'border-box',
    },
    checkbox: {
      marginRight: '5px',
    },
    radioLabel: {
      marginRight: '10px',
    },
    radioInput: {
      marginRight: '5px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#00ff5e',
      color: '#fff',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      fontSize: '0.8rem',
    },
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      setFormData({
        name: '',
        email: '',
        roomNumber: '',
        dietaryRestrictions: '',
        vegetarian: false,
        mealPreference: '',
      });
      setFormErrors({
        name: '',
        email: '',
        roomNumber: '',
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address';
      valid = false;
    }

    if (!formData.roomNumber.trim()) {
      errors.roomNumber = 'Room number is required';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  useEffect(() => {
    document.body.style.backgroundColor = 'orange';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Hostel Mess Registration</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          <span style={styles.error}>{formErrors.name}</span>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          <span style={styles.error}>{formErrors.email}</span>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Room Number:</label>
          <input
            type="text"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          <span style={styles.error}>{formErrors.roomNumber}</span>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Dietary Restrictions:</label>
          <input
            type="text"
            name="dietaryRestrictions"
            value={formData.dietaryRestrictions}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Vegetarian:</label>
          <input
            type="checkbox"
            name="vegetarian"
            checked={formData.vegetarian}
            onChange={handleInputChange}
            style={styles.checkbox}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Meal Preference:</label>
          <div>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="mealPreference"
                value="Vegetarian"
                checked={formData.mealPreference === "Vegetarian"}
                onChange={handleInputChange}
                style={styles.radioInput}
              />
              Vegetarian
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="mealPreference"
                value="Non-Vegetarian"
                checked={formData.mealPreference === "Non-Vegetarian"}
                onChange={handleInputChange}
                style={styles.radioInput}
              />
              Non-Vegetarian
            </label>
          </div>
        </div>
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;