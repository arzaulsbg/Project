import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow only frontend origin
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Mock database for educational resources
const educationalResources = {
  math: [
    { title: "Khan Academy - Mathematics", url: "https://www.khanacademy.org/math" },
    { title: "Mathematics Stack Exchange", url: "https://math.stackexchange.com" }
  ],
  science: [
    { title: "National Geographic Education", url: "https://education.nationalgeographic.org/resource/science/" },
    { title: "Science Daily", url: "https://www.sciencedaily.com" }
  ],
  history: [
    { title: "World History Encyclopedia", url: "https://www.worldhistory.org" },
    { title: "History.com", url: "https://www.history.com" }
  ],
  general: [
    { title: "Wikipedia", url: "https://www.wikipedia.org" },
    { title: "Britannica", url: "https://www.britannica.com" }
  ]
};

// Simple AI logic to categorize questions
function categorizeQuestion(question) {
  question = question.toLowerCase();
  if (question.includes('math') || question.includes('calculate') || question.includes('equation')) {
    return 'math';
  } else if (question.includes('science') || question.includes('physics') || question.includes('chemistry')) {
    return 'science';
  } else if (question.includes('history') || question.includes('past') || question.includes('ancient')) {
    return 'history';
  }
  return 'general';
}

// Generate a response based on the question
function generateResponse(question) {
  const category = categorizeQuestion(question);
  const resources = educationalResources[category] || educationalResources.general;
  
  return {
    explanation: `Here's what I understand about your question regarding ${category}: ${question}\n\nThis is a placeholder response that would normally come from a more sophisticated AI model. The response would be tailored to your specific question and learning level.`,
    resources: resources,
    category: category
  };
}

// Routes
app.post('/api/ask', (req, res) => {
  try {
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    const response = generateResponse(question);
    res.json(response);
  } catch (error) {
    console.error('Error processing question:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});