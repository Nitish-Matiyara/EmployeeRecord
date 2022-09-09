const express = require("express");
const db = require("./connections/mongoose");
const employeeRouter = require("./routes/employeeRouter");
const app = express();
const port = process.env.PORT || 8004;

app.use(express.json())
app.use('/employee' , employeeRouter)

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
