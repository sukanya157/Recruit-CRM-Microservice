require('dotenv').config();
const express = require('express');
const app = express();

const candidateRouteHandlers = require('./routes/candidateRouteHandlers');
const profileRouteHandlers = require('./routes/profileRouteHandlers');


app.use('/api/public', candidateRouteHandlers);
app.use('/api/public', profileRouteHandlers);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Public API Microservice running on http://localhost:${PORT}`);
});
