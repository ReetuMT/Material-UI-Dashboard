import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Input } from '@mui/material';

export default function AddProduct() {
  const navigate = useNavigate('');
  const [img, setImaage] = React.useState()
  function handleimageChange(file) {
    console.log(file);
    // setImaage(file)
  }
  const [errors, setErrors] = React.useState({});
  const [formData, setFormData] = React.useState({
    title: '',
    description: '',
    category: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const newErrors = {};

    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.price) newErrors.price = 'Price is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/product", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        navigate("/about");
      } else {
        console.error('Server did not return JSON:', await response.text());
        alert('Unexpected response from server.');
      }
    } catch (error) {
      console.error("Error creating product:", error);
      alert("An error occurred while creating the product");
    }
  }

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Add Product</h1>
      <div style={{ marginLeft: 320 }}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '85ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <TextField
              required
              id="filled-title"
              label="Title"
              variant="filled"
              name="title"
              value={formData.title}
              onChange={handleChange}
              error={!!errors.title}
              helperText={errors.title}
            />
            <TextField
              required
              id="filled-description"
              label="Description"
              variant="filled"
              name="description"
              value={formData.description}
              onChange={handleChange}
              error={!!errors.description}
              helperText={errors.description}
            />
            <TextField
              required
              id="filled-category"
              label="Category"
              variant="filled"
              name="category"
              value={formData.category}
              onChange={handleChange}
              error={!!errors.category}
              helperText={errors.category}
            />
            <TextField
              required
              id="filled-price"
              label="($)Price"
              variant="filled"
              name="price"
              value={formData.price}
              onChange={handleChange}
              error={!!errors.price}
              helperText={errors.price}
            />


          </div>
          <Input type='file' name='file' onInput={(e) => { handleimageChange(e.target.files) }} />
          <Button type="submit" variant="contained" style={{ marginLeft: 10, marginTop: 10 }}>
            Add
          </Button>
          <Button type="cancel" variant="outlined" style={{ marginLeft: 10, marginTop: 10 }} onClick={() => navigate("/about")}>
            Cancel
          </Button>
        </Box>
      </div>
    </div>
  );
}
