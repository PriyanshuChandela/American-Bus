const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const response = await axios.post(
      "https://n8n.srv1322090.hstgr.cloud/webhook-test/921af5bc-de61-4278-9521-ebbe98b89440",
      req.body
    );

    res.status(200).json({
      message: "Data sent successfully",
      data: response.data,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error sending data",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});