import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Paper, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

const EmailClassifier = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter an email!");

    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", { email });
      setResult(response.data.result);
    } catch (error) {
      console.error("Error:", error);
      setResult("Error classifying email.");
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Paper elevation={3} style={{ padding: "30px", textAlign: "center", background: "#f5f5f5" }}>
        <Typography variant="h4" gutterBottom color="primary">
          📩 Email Spam Detector
        </Typography>
        <TextField
          label="Enter Email Content"
          multiline
          rows={5}
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: "20px" }}
        />
        <Button
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          onClick={handleSubmit}
          disabled={loading}
          fullWidth
          style={{ fontSize: "16px", padding: "10px" }}
        >
          {loading ? "Checking..." : "Check Email"}
        </Button>

        {result && (
          <Box
            mt={3}
            p={2}
            style={{
              backgroundColor: result === "Spam" ? "#ffebee" : "#e8f5e9",
              color: result === "Spam" ? "#d32f2f" : "#388e3c",
              borderRadius: "5px",
            }}
          >
            <Typography variant="h5">
              {result === "Spam" ? <ErrorIcon /> : <CheckCircleIcon />} {result}
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default EmailClassifier;
