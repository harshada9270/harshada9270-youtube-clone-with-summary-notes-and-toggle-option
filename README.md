# YouTube Clone with Smart Video Summary + Auto-Note Taker

This application is a YouTube clone with an enhanced viewing experience by providing:
- AI-generated timestamped summaries of long videos
- Click-to-jump functionality for key sections
- Auto-generated notes in bullet format
- Added toggle for dark and light theme.

### Changes Made
- Added Smart Summary feature that provides AI-generated timestamped summaries of videos
- Implemented Note feature that automatically generates bullet-point notes from video content
- Added Dark/Light theme toggle for better user experience (unlike YouTube where theme change requires going to settings)


### YouTube Clone Features
- YouTube-like user interface and experience
- Video browsing and playback
- Search functionality
- Related videos suggestions
- Video metadata display (title, views, channel, etc.)

### Smart Summary Features
- Speech-to-text conversion of video content
- AI-powered summarization of video content
- Timestamped navigation (click to jump to specific parts)
- Bullet-point note generation
- Downloadable notes
- Side panel integration with the YouTube UI


## Tech Stack
- Frontend: React, Material-UI
- Backend: Node.js, Express
- AI/ML: OpenAI API for summarization
- Speech-to-Text: Web Speech API / Google Cloud Speech-to-Text

## Project Structure
- `/frontend`: React application for the YouTube clone UI
- `/backend`: Node.js/Express server for API endpoints

## How to Use

1. Browse videos on the homepage
2. Click on a video to watch it
3. Click the "Generate Summary" button in the header
4. View the timestamped summary in the side panel
5. Click on timestamps to jump to specific parts of the video
6. Switch to the Notes tab to view bullet-point notes
7. Download notes for offline reference

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file with your OpenAI API key
4. Start the server: `npm start`

### Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your browser to: `http://localhost:3000`
