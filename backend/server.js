require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');
const axios = require('axios');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Routes
app.get('/', (req, res) => {
  res.send('YouTube Smart Video Summary API is running');
});

// API endpoint to get video transcript
app.post('/api/transcript', async (req, res) => {
  try {
    const { videoId } = req.body;
    
    if (!videoId) {
      return res.status(400).json({ error: 'Video ID is required' });
    }
    
    // In a real implementation, you would use YouTube Data API or a third-party service
    // to fetch the transcript. This is a placeholder.
    
    // Mock response for demonstration
    res.json({
      success: true,
      message: 'Transcript fetched successfully',
      transcript: 'This is a placeholder transcript. In a real implementation, this would be the actual transcript of the video.'
    });
  } catch (error) {
    console.error('Error fetching transcript:', error);
    res.status(500).json({ error: 'Failed to fetch transcript' });
  }
});

// API endpoint to generate summary
app.post('/api/summary', async (req, res) => {
  try {
    const { transcript } = req.body;
    
    if (!transcript) {
      return res.status(400).json({ error: 'Transcript is required' });
    }
    
    // Use OpenAI to generate summary
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that generates timestamped summaries of video transcripts. Create a concise summary with key points and timestamps."
        },
        {
          role: "user",
          content: `Generate a timestamped summary of this transcript: ${transcript}`
        }
      ],
    });
    
    const summary = completion.choices[0].message.content;
    
    res.json({
      success: true,
      summary
    });
  } catch (error) {
    console.error('Error generating summary:', error);
    res.status(500).json({ error: 'Failed to generate summary' });
  }
});

// API endpoint to generate notes
app.post('/api/notes', async (req, res) => {
  try {
    const { transcript } = req.body;
    
    if (!transcript) {
      return res.status(400).json({ error: 'Transcript is required' });
    }
    
    // Use OpenAI to generate notes
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that generates bullet-point notes from video transcripts. Create comprehensive notes that capture the main ideas and details."
        },
        {
          role: "user",
          content: `Generate bullet-point notes from this transcript: ${transcript}`
        }
      ],
    });
    
    const notes = completion.choices[0].message.content;
    
    res.json({
      success: true,
      notes
    });
  } catch (error) {
    console.error('Error generating notes:', error);
    res.status(500).json({ error: 'Failed to generate notes' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
