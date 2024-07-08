import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
export default function About() {
  const [products, setProducts] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch("http://localhost:3000/product");
    const actualData = await response.json();
    setProducts(actualData);
  console.log(actualData);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/product/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        getProducts();
      } else {
        console.error('Failed to delete product:', await response.text());
        alert('Failed to delete product.');
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("An error occurred while deleting the product");
    }
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center', textDecoration: "underline" }}>Product List</h1>
      </div>
      <Button variant="outlined" onClick={() => navigate("/create")} startIcon={<AddIcon />} style={{marginBottom:10}}>Add Product</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Product Image</TableCell>
              <TableCell align="right">$(Price)</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.title.slice(0, 12)}</TableCell>
                <TableCell align="left">{product.description.substring(0, 60)}....</TableCell>
                <TableCell align="center">
                  <img src={product.image} alt={product.title} style={{ width: '50px' }} />
                </TableCell>
                <TableCell align="right">${product.price}</TableCell>
                <TableCell align="right">{product.category}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<ModeEditIcon />}
                    style={{ marginRight: 10 }}
                    onClick={() => navigate(`/editProduct/${product.id}`)}
                  >
                    Edit
                  </Button>

                  <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDelete(product.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
