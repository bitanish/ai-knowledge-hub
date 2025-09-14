import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import axios from "axios";

function LoginPage() {
    const [formData, setFormData] = useState({username: "", password: ""});
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://127.0.0.1:8000/auth/login/", formData);
            const { access, refresh } = res.data;
            localStorage.setItem("access_token", access);
            localStorage.setItem("refresh_token", refresh);
            alert("Testing");
        } catch (err) {
            setError("Invalid username or password");
        }
    }

    return (
        <Container maxWidth="sm" sx={{display: "flex", minHeight: "100vh", justifyContent: "center", alignItems: "center", bgcolor: "#f5f5f5", minWidth: "100vw"}}>
            <Paper elevation={3} sx={{p: 4, mt:8, borderRadius: 3}}>
                <Typography variant="h5" align="center" gutterBottom>
                    AI Knowledge Hub Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField label="username" name="username" fullWidth margin="normal" value={formData.username} onChange={handleChange} required/>
                    <TextField label="password" name="password" type="password" fullWidth margin="normal" value={formData.password} onChange={handleChange} required />
                    <Box sx={{ minHeight: "24px" }}> 
                    {error && (
                        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                        {error}
                        </Typography>
                    )}
                    </Box>                    
                    <Button type="submit" variant="contained" fullWidth sx={{mt:2, borderRadius: 2}}>Submit</Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default LoginPage;
