require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5050; // Get PORT value from environment variables, default to 5050 if not defined

app.use(cors());
app.use(express.json());

app.use("/inventories", inventoryRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
