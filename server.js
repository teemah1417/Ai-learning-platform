const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const pool = require('./database/db');

app.use(cors());
app.use(bodyParser.json());

// Test API Endpoint
app.get('/', (req, res) => res.send('Welcome to the AI Learning Platform'));

// Route to fetch courses
app.get('/api/courses', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM courses');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to fetch job matches (AI API)
app.post('/api/job-match', async (req, res) => {
  const { userSkills, resume } = req.body;
  const openai = require('openai');
  const api = new openai.OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const completion = await api.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a job recommendation assistant.' },
        { role: 'user', content: `Match jobs for skills: ${userSkills} and resume: ${resume}` },
      ],
    });

    res.json({ jobMatches: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const courseRoutes = require('./routes/courseRoutes');
app.use('/api/courses', courseRoutes);
