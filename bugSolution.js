const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (isNaN(userId) || userId <= 0) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... further code to fetch user data based on userId, now knowing userId is valid
  //Example of getting user from database. Replace with your own database interaction.
  const user = { id: userId, name: 'John Doe' };
  res.json(user);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});