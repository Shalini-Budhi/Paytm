const express = require('express');
const app = express();
const PORT = 7000;   

// // Sample route
// app.get('/', (req, res) => {
//   res.send('Server is running!');
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on:${PORT}`);
});
