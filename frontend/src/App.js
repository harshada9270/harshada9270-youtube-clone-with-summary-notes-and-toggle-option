import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieIcon from '@mui/icons-material/Movie';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';

// Components
import VideoPlayer from './components/VideoPlayer';
import SummaryDisplay from './components/SummaryDisplay';
import NotesDisplay from './components/NotesDisplay';
import Header from './components/Header';
import VideoCard from './components/VideoCard';
import RelatedVideos from './components/RelatedVideos';
import './App.css';

// Sample video data
const sampleVideos = [
  // Educational Videos
  {
    id: 'rfscVS0vtbw',
    title: 'Learn Python - Full Course for Beginners',
    channel: 'freeCodeCamp.org',
    views: '38M views',
    timestamp: '5 years ago',
    thumbnail: 'https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg',
    category: 'education',
    available: true
  },
  {
    id: 'yZ0vjtFwqSg',
    title: 'How to Learn Anything Fast - The Feynman Technique',
    channel: 'Thomas Frank',
    views: '2.4M views',
    timestamp: '3 years ago',
    thumbnail: 'https://i.ytimg.com/vi/yZ0vjtFwqSg/hqdefault.jpg',
    category: 'education',
    available: true
  },
  {
    id: 'OK_JCtrrv-c',
    title: 'Machine Learning Basics | What Is Machine Learning? | Introduction To Machine Learning',
    channel: 'Simplilearn',
    views: '1.2M views',
    timestamp: '2 years ago',
    thumbnail: 'https://i.ytimg.com/vi/OK_JCtrrv-c/hqdefault.jpg',
    category: 'education',
    available: true
  },
  {
    id: '7lECIsRif10',
    title: 'The Map of Mathematics',
    channel: 'Domain of Science',
    views: '4.3M views',
    timestamp: '5 years ago',
    thumbnail: 'https://i.ytimg.com/vi/7lECIsRif10/hqdefault.jpg',
    category: 'education',
    available: true
  },
  {
    id: 'Unzc731iCUY',
    title: 'How does the stock market work? - Oliver Elfenbaum',
    channel: 'TED-Ed',
    views: '9.1M views',
    timestamp: '4 years ago',
    thumbnail: 'https://i.ytimg.com/vi/Unzc731iCUY/hqdefault.jpg',
    category: 'education',
    available: true
  },
  {
    id: 'wHLfJ5-Wh_4',
    title: 'The History of the World: Every Year',
    channel: 'Ollie Bye',
    views: '24M views',
    timestamp: '6 years ago',
    thumbnail: 'https://i.ytimg.com/vi/wHLfJ5-Wh_4/hqdefault.jpg',
    category: 'education'
  },
  
  // More Educational Videos
  {
    id: '8jLOx1hD3_o',
    title: 'The Map of Computer Science',
    channel: 'Domain of Science',
    views: '3.2M views',
    timestamp: '5 years ago',
    thumbnail: 'https://i.ytimg.com/vi/8jLOx1hD3_o/hqdefault.jpg',
    category: 'education'
  },
  {
    id: 'bJzb-RuUcMU',
    title: 'How To Learn Faster',
    channel: 'Veritasium',
    views: '12M views',
    timestamp: '2 years ago',
    thumbnail: 'https://i.ytimg.com/vi/bJzb-RuUcMU/hqdefault.jpg',
    category: 'education'
  },
  {
    id: 'fNk_zzaMoSs',
    title: 'Linear Algebra - Full College Course',
    channel: 'freeCodeCamp.org',
    views: '4.5M views',
    timestamp: '3 years ago',
    thumbnail: 'https://i.ytimg.com/vi/fNk_zzaMoSs/hqdefault.jpg',
    category: 'education'
  },
  {
    id: 'HcqpanDadyQ',
    title: 'The 7 Habits of Highly Effective People Summary',
    channel: 'Productivity Game',
    views: '8.7M views',
    timestamp: '4 years ago',
    thumbnail: 'https://i.ytimg.com/vi/HcqpanDadyQ/hqdefault.jpg',
    category: 'education'
  },
  
  // Technology & Science
  {
    id: 'pLqipJNItIo',
    title: 'The Infinite Pattern That Never Repeats',
    channel: 'Veritasium',
    views: '24M views',
    timestamp: '2 years ago',
    thumbnail: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg',
    category: 'science'
  },
  {
    id: 'lFOsPGPIgTw',
    title: 'How ChatGPT Works Technically | ChatGPT Architecture',
    channel: 'AI Explained',
    views: '1.5M views',
    timestamp: '1 year ago',
    thumbnail: 'https://i.ytimg.com/vi/lFOsPGPIgTw/hqdefault.jpg',
    category: 'technology'
  },
  {
    id: 'XxDCFVm-KKw',
    title: 'How Quantum Computers Break The Internet... Starting Now',
    channel: 'Sabine Hossenfelder',
    views: '2.1M views',
    timestamp: '1 year ago',
    thumbnail: 'https://i.ytimg.com/vi/XxDCFVm-KKw/hqdefault.jpg',
    category: 'science'
  },
  
  // Documentaries & Tutorials
  {
    id: 'qxQKlVlARxY',
    title: 'Our Planet | Coastal Seas | FULL EPISODE | Netflix',
    channel: 'Netflix',
    views: '12M views',
    timestamp: '3 years ago',
    thumbnail: 'https://i.ytimg.com/vi/qxQKlVlARxY/hqdefault.jpg',
    category: 'documentary'
  },
  {
    id: 'eMOkz-eKipk',
    title: 'How to Speak: Lecture Tips from Patrick Winston',
    channel: 'MIT OpenCourseWare',
    views: '4.7M views',
    timestamp: '5 years ago',
    thumbnail: 'https://i.ytimg.com/vi/eMOkz-eKipk/hqdefault.jpg',
    category: 'education'
  },
  
  // More Educational Content
  {
    id: 'jS0SUi2G5dg',
    title: 'How to Study Effectively for School or College - Top 6 Science-Based Study Skills',
    channel: 'Sprouts',
    views: '12.3M views',
    timestamp: '5 years ago',
    thumbnail: 'https://i.ytimg.com/vi/jS0SUi2G5dg/hqdefault.jpg',
    category: 'education'
  },
  {
    id: 'eVajQPuRmk8',
    title: 'How to Learn Anything with the Feynman Technique',
    channel: 'Thomas Frank',
    views: '1.8M views',
    timestamp: '2 years ago',
    thumbnail: 'https://i.ytimg.com/vi/eVajQPuRmk8/hqdefault.jpg',
    category: 'education'
  },
  {
    id: 'Z2N5a7XZjTI',
    title: 'How to Read a Book a Week | Jim Kwik',
    channel: 'Mindvalley',
    views: '3.2M views',
    timestamp: '3 years ago',
    thumbnail: 'https://i.ytimg.com/vi/Z2N5a7XZjTI/hqdefault.jpg',
    category: 'education'
  }
];

// Create theme based on mode (light or dark)
const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#FF0000', // YouTube red
    },
    secondary: {
      main: '#282828', // YouTube dark gray
    },
    background: {
      default: mode === 'light' ? '#F9F9F9' : '#0F0F0F', // YouTube background
      paper: mode === 'light' ? '#FFFFFF' : '#282828',
    },
    text: {
      primary: mode === 'light' ? '#0F0F0F' : '#FFFFFF',
      secondary: mode === 'light' ? '#606060' : '#AAAAAA',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: mode === 'light' ? '#FFFFFF' : '#282828',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "default"
      },
      styleOverrides: {
        root: {
          backgroundColor: mode === 'light' ? '#FFFFFF' : '#282828',
          color: mode === 'light' ? '#0F0F0F' : '#FFFFFF',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'light' ? '#FFFFFF' : '#282828',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'light' ? '#FFFFFF' : '#282828',
          color: mode === 'light' ? '#0F0F0F' : '#FFFFFF',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
            '&:hover': {
              backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.12)',
            },
          },
          '&:hover': {
            backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: mode === 'light' ? 'rgba(0, 0, 0, 0.54)' : 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: mode === 'light' ? '#0F0F0F' : '#FFFFFF',
        },
        secondary: {
          color: mode === 'light' ? '#606060' : '#AAAAAA',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
        },
      },
    },
  },
});

const drawerWidth = 240;

function App() {
  const [mode, setMode] = useState('light');
  const [videos, setVideos] = useState(sampleVideos);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [summary, setSummary] = useState(null);
  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('summary');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSummaryPanel, setShowSummaryPanel] = useState(false);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setSummary(null);
    setNotes(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filteredVideos = sampleVideos.filter(video => 
        video.title.toLowerCase().includes(query.toLowerCase()) && video.available
      );
      setVideos(filteredVideos);
    } else {
      setVideos(sampleVideos.filter(video => video.available));
    }
  };
  
  const [error, setError] = useState(null);

  const generateSummary = async () => {
    if (!selectedVideo) return;
    
    setLoading(true);
    setShowSummaryPanel(true);
    setSummary(null);
    setNotes(null);
    setError(null);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      let mockSummary, mockNotes;
      
      // Generate different summaries based on video category and language
      if (selectedVideo.category === 'education') {
        mockSummary = generateEducationalSummary(selectedVideo);
        mockNotes = generateEducationalNotes(selectedVideo);
      } else if (selectedVideo.category === 'science' || selectedVideo.category === 'technology') {
        mockSummary = generateScienceSummary(selectedVideo);
        mockNotes = generateScienceNotes(selectedVideo);
      } else if (selectedVideo.category === 'documentary') {
        mockSummary = generateDocumentarySummary(selectedVideo);
        mockNotes = generateDocumentaryNotes(selectedVideo);
      } else {
        mockSummary = generateDefaultSummary(selectedVideo);
        mockNotes = generateDefaultNotes(selectedVideo);
      }
      
      // Add language-specific formatting
      const languages = ['English', 'Spanish', 'French', 'German', 'Hindi'];
      const selectedLanguage = languages[Math.floor(Math.random() * languages.length)];
      
      mockSummary = `[${selectedLanguage}]\n\n${mockSummary}`;
      mockNotes = `[${selectedLanguage}]\n\n${mockNotes}`;
      
      setSummary(mockSummary);
      setNotes(mockNotes);
      
    } catch (error) {
      console.error('Error processing video:', error);
      setError(error.message || 'Failed to generate summary');
    } finally {
      setLoading(false);
    }
  };
  
  const generateEducationalSummary = (video) => {
    const timestamps = [
      Math.floor(Math.random() * 2),                   // Intro (0-1 min)
      Math.floor(Math.random() * 3) + 2,               // First concept (2-4 min)
      Math.floor(Math.random() * 4) + 5,               // Second concept (5-8 min)
      Math.floor(Math.random() * 5) + 9,               // Practical demo (9-13 min)
      Math.floor(Math.random() * 4) + 14,              // Common mistakes (14-17 min)
      Math.floor(Math.random() * 5) + 18               // Summary (18-22 min)
    ];
    
    const titleWords = video.title.split(' ');
    const keyWords = titleWords.filter(word => word.length > 3).slice(0, 5);
    
    const educationalConcepts = [
      'Learning frameworks', 'Cognitive models', 'Problem-solving techniques',
      'Knowledge acquisition', 'Skill development', 'Practical applications',
      'Theoretical foundations', 'Core principles', 'Advanced methodologies',
      'Best practices', 'Common misconceptions', 'Expert insights'
    ];
    
    const selectedConcepts = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * educationalConcepts.length);
      selectedConcepts.push(educationalConcepts[randomIndex]);
    }
    
    return `# Educational Summary: ${video.title}

**${timestamps[0]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Introduction and learning objectives for ${keyWords[0] || 'the topic'}

**${timestamps[1]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - ${selectedConcepts[0]}: ${keyWords[1] || 'Fundamental principles'} explained with examples

**${timestamps[2]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - ${selectedConcepts[1]}: ${keyWords[2] || 'Advanced techniques'} and their applications

**${timestamps[3]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Practical demonstration and step-by-step walkthrough of ${keyWords[0] || 'the concept'}

**${timestamps[4]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Common mistakes to avoid and troubleshooting tips for ${keyWords[1] || 'beginners'}

**${timestamps[5]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Summary of learning outcomes and suggested next steps

This educational video by ${video.channel} provides a comprehensive overview of ${keyWords[0] || 'the subject'} with clear explanations, practical examples, and actionable learning outcomes.`;
  };
  
  const generateEducationalNotes = (video) => {
    // Extract key words from the title for dynamic content
    const titleWords = video.title.split(' ');
    const keyWords = titleWords.filter(word => word.length > 3).slice(0, 5);
    
    // Learning objectives - randomly select from a pool
    const learningObjectives = [
      'Understand the fundamental concepts of the subject',
      'Apply key principles to solve practical problems',
      `Develop skills in ${keyWords[0] || 'relevant'} techniques`,
      'Analyze complex problems and develop solutions',
      'Evaluate different approaches and methodologies',
      'Create your own implementation based on learned principles',
      'Master the core terminology and frameworks',
      'Identify common pitfalls and how to avoid them'
    ];
    
    // Randomly select 3 learning objectives
    const selectedObjectives = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * learningObjectives.length);
      selectedObjectives.push(learningObjectives[randomIndex]);
    }
    
    // Key concepts - based on video title and random concepts
    const conceptIdeas = [
      'Fundamental principles', 'Core methodologies', 'Essential frameworks',
      'Best practices', 'Implementation strategies', 'Problem-solving approaches',
      'Theoretical foundations', 'Practical applications', 'Advanced techniques',
      'Common challenges', 'Optimization methods', 'Integration patterns'
    ];
    
    // Select random concepts
    const selectedConcepts = [];
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * conceptIdeas.length);
      selectedConcepts.push(conceptIdeas[randomIndex]);
    }
    
    // Practice exercises - dynamic based on concepts
    const exercises = [
      `Apply ${keyWords[0] || 'core concepts'} to solve a simple problem`,
      `Implement ${selectedConcepts[0].toLowerCase()} in a real-world scenario`,
      `Create a ${keyWords[1] || 'project'} using the techniques shown`,
      `Analyze a case study using ${selectedConcepts[1].toLowerCase()}`,
      `Design your own ${keyWords[2] || 'solution'} based on the video principles`
    ];
    
    // Randomly select 2 exercises
    const selectedExercises = [];
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * exercises.length);
      selectedExercises.push(exercises[randomIndex]);
    }
    
    return `# Study Notes: ${video.title}

## Learning Objectives:
• ${selectedObjectives[0]}
• ${selectedObjectives[1]}
• ${selectedObjectives[2]}

## Key Concepts:
• ${keyWords[0] || 'Concept'} 1: ${selectedConcepts[0]}
  • Sub-point: Practical applications in ${keyWords[1] || 'the field'}
  • Sub-point: Common misconceptions about ${keyWords[0] || 'the topic'}
• ${keyWords[2] || 'Concept'} 2: ${selectedConcepts[1]}
  • Sub-point: When to apply these techniques
  • Sub-point: Step-by-step implementation guide

## Practice Exercises:
• Exercise 1: ${selectedExercises[0]}
• Exercise 2: ${selectedExercises[1]}

## Additional Resources:
• Recommended readings by ${video.channel}
• Online practice platforms for ${keyWords[0] || 'this topic'}
• Community forums for further discussion and support`;
  };
  
  const generateScienceSummary = (video) => {
    const timestamps = [
      Math.floor(Math.random() * 3),                   // Intro (0-2 min)
      Math.floor(Math.random() * 4) + 3,               // Background (3-6 min)
      Math.floor(Math.random() * 5) + 7,               // Methodology (7-11 min)
      Math.floor(Math.random() * 4) + 12,              // Findings (12-15 min)
      Math.floor(Math.random() * 5) + 16,              // Implications (16-20 min)
      Math.floor(Math.random() * 4) + 21               // Future research (21-24 min)
    ];

    return `# Scientific Analysis: ${video.title}

**${timestamps[0]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Introduction to the scientific problem and its significance

**${timestamps[1]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Background and historical context of the research

**${timestamps[2]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Methodology and experimental design

**${timestamps[3]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Key findings and data visualization

**${timestamps[4]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Implications and real-world applications

**${timestamps[5]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Future research directions and unanswered questions

This video by ${video.channel} presents complex scientific concepts in an accessible format, backed by empirical evidence and expert analysis.`;
  };
  
  const generateScienceNotes = (video) => {
    return `# Scientific Notes: ${video.title}

## Research Context:
• Historical background of the scientific problem
• Current state of research in this field
• Key researchers and their contributions

## Methodology:
• Experimental design and controls
• Data collection techniques
• Statistical analysis methods

## Key Findings:
• Finding 1: Primary results and their significance
• Finding 2: Secondary observations and patterns
• Finding 3: Unexpected discoveries

## Implications:
• Theoretical implications for the field
• Practical applications in industry
• Societal impact and ethical considerations

## Questions for Further Research:
• Unresolved questions highlighted in the video
• Potential future experimental approaches`;
  };
  
  const generateDocumentarySummary = (video) => {
    const timestamps = [
      Math.floor(Math.random() * 3),                   // Intro (0-2 min)
      Math.floor(Math.random() * 4) + 3,               // Context (3-6 min)
      Math.floor(Math.random() * 5) + 7,               // Main subject (7-11 min)
      Math.floor(Math.random() * 4) + 12,              // Interviews (12-15 min)
      Math.floor(Math.random() * 5) + 16,              // Impact (16-20 min)
      Math.floor(Math.random() * 4) + 21               // Conclusion (21-24 min)
    ];

    return `# Documentary Overview: ${video.title}

**${timestamps[0]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Introduction and establishing shots

**${timestamps[1]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Historical context and background information

**${timestamps[2]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Main subject introduction and key narratives

**${timestamps[3]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Expert interviews and firsthand accounts

**${timestamps[4]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Environmental or social impact analysis

**${timestamps[5]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Current status and future outlook

This documentary by ${video.channel} provides a compelling narrative with stunning visuals, expert testimony, and thought-provoking analysis of important real-world issues.`;
  };
  
  const generateDocumentaryNotes = (video) => {
    return `# Documentary Notes: ${video.title}

## Key Themes:
• Theme 1: Environmental/social/historical significance
• Theme 2: Human impact and personal stories
• Theme 3: Scientific or cultural importance

## Featured Experts:
• Expert 1: Background and key insights
• Expert 2: Perspective on main issues
• Expert 3: Solutions and recommendations

## Important Facts:
• Fact 1: Statistical evidence presented
• Fact 2: Historical context
• Fact 3: Current status

## Visual Highlights:
• Notable locations featured
• Significant footage or imagery
• Graphical representations of data

## Action Items:
• Ways viewers can get involved
• Resources for further learning
• Organizations mentioned for support`;
  };
  
  const generateDefaultSummary = (video) => {
    const timestamps = [
      Math.floor(Math.random() * 2),                   // Intro (0-1 min)
      Math.floor(Math.random() * 3) + 2,               // Main content (2-4 min)
      Math.floor(Math.random() * 4) + 5,               // Highlights (5-8 min)
      Math.floor(Math.random() * 3) + 9                // Conclusion (9-11 min)
    ];

    return `# Video Summary: ${video.title}

**${timestamps[0]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Introduction and overview

**${timestamps[1]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Main content begins

**${timestamps[2]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Key highlights and important moments

**${timestamps[3]}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}** - Conclusion and final thoughts

This video by ${video.channel} provides entertaining content with engaging presentation and high production value.`;
  };
  
  const generateDefaultNotes = (video) => {
    return `# Notes for: ${video.title}

• Video created by ${video.channel}
• Main points covered:
  • Introduction to the topic
  • Key moments and highlights
  • Notable quotes and statements
  • Audience reactions and engagement

• Interesting timestamps:
  • 0:00 - Start of video
  • 1:30 - Beginning of main content
  • 3:45 - Key highlight moment
  • 6:20 - Conclusion

• Related content:
  • Other videos by this creator
  • Similar content in this category`;
  };

  const handleTimeClick = (time) => {
    // Find the video player iframe and set its current time
    const iframe = document.querySelector('iframe');
    if (iframe && iframe.contentWindow) {
      // Convert timestamp format (e.g., "1:30") to seconds
      const timeParts = time.split(':');
      let seconds = 0;
      
      if (timeParts.length === 2) {
        // Minutes:Seconds format
        seconds = parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);
      } else if (timeParts.length === 3) {
        // Hours:Minutes:Seconds format
        seconds = parseInt(timeParts[0]) * 3600 + parseInt(timeParts[1]) * 60 + parseInt(timeParts[2]);
      }
      
      // Use YouTube iframe API to seek to the specified time
      iframe.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: 'seekTo',
        args: [seconds, true]
      }), '*');
    }
  };

  // For demo purposes, select the first video by default
  useEffect(() => {
    if (videos.length > 0 && !selectedVideo) {
      setSelectedVideo(videos[0]);
    }
  }, [videos, selectedVideo]);

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header 
          onSearch={handleSearch}
          mode={mode}
          onToggleColorMode={toggleColorMode}
        />
        
        <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* Sidebar */}
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                borderRight: '1px solid rgba(0, 0, 0, 0.12)',
                position: 'relative',
                bgcolor: '#FFFFFF',
                overflowY: 'auto',
                height: 'calc(100vh - 64px)', // Subtract header height
              },
            }}
          >
            <List>
              <ListItem button selected={!selectedVideo} onClick={() => setSelectedVideo(null)}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button disabled>
                <ListItemIcon>
                  <ExploreIcon />
                </ListItemIcon>
                <ListItemText primary="Explore" />
              </ListItem>
              <ListItem button disabled>
                <ListItemIcon>
                  <SubscriptionsIcon />
                </ListItemIcon>
                <ListItemText primary="Subscriptions" />
              </ListItem>
              <ListItem button disabled>
                <ListItemIcon>
                  <WhatshotIcon />
                </ListItemIcon>
                <ListItemText primary="Shorts" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button disabled>
                <ListItemIcon>
                  <VideoLibraryIcon />
                </ListItemIcon>
                <ListItemText primary="Library" />
              </ListItem>
              <ListItem button disabled>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary="History" />
              </ListItem>
              <ListItem button disabled>
                <ListItemIcon>
                  <VideoLibraryIcon />
                </ListItemIcon>
                <ListItemText primary="Your Videos" />
              </ListItem>
              <ListItem button disabled>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary="Watch Later" />
              </ListItem>
              <ListItem button disabled>
                <ListItemIcon>
                  <ThumbUpIcon />
                </ListItemIcon>
                <ListItemText primary="Liked Videos" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem 
                button 
                selected={showSummaryPanel} 
                onClick={() => {
                  if (selectedVideo) {
                    setShowSummaryPanel(!showSummaryPanel);
                    if (!showSummaryPanel) {
                      setActiveTab('summary');
                    }
                  }
                }}
                disabled={!selectedVideo}
              >
                <ListItemIcon>
                  <SummarizeIcon color={showSummaryPanel ? "primary" : "inherit"} />
                </ListItemIcon>
                <ListItemText primary="Smart Summary" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <Typography variant="body2" color="text.secondary">
                  SUBSCRIPTIONS
                </Typography>
              </ListItem>
              <ListItem button disabled>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Avatar sx={{ width: 24, height: 24 }}>M</Avatar>
                </ListItemIcon>
                <ListItemText primary="Music" />
              </ListItem>
              <ListItem button disabled>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Avatar sx={{ width: 24, height: 24 }}>S</Avatar>
                </ListItemIcon>
                <ListItemText primary="Sports" />
              </ListItem>
              <ListItem button disabled>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Avatar sx={{ width: 24, height: 24 }}>G</Avatar>
                </ListItemIcon>
                <ListItemText primary="Gaming" />
              </ListItem>
              <ListItem button disabled>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Avatar sx={{ width: 24, height: 24 }}>N</Avatar>
                </ListItemIcon>
                <ListItemText primary="News" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <Typography variant="body2" color="text.secondary">
                  EXPLORE
                </Typography>
              </ListItem>
              <ListItem button disabled>
                <ListItemIcon>
                  <MusicNoteIcon />
                </ListItemIcon>
                <ListItemText primary="Music" />
              </ListItem>
              <ListItem button disabled>
                <ListItemIcon>
                  <MovieIcon />
                </ListItemIcon>
                <ListItemText primary="Movies & TV" />
              </ListItem>
              <ListItem button disabled>
                <ListItemIcon>
                  <SportsEsportsIcon />
                </ListItemIcon>
                <ListItemText primary="Gaming" />
              </ListItem>
              <ListItem button disabled>
                <ListItemIcon>
                  <NewspaperIcon />
                </ListItemIcon>
                <ListItemText primary="News" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button disabled>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem button disabled>
                <ListItemIcon>
                  <HelpOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Help" />
              </ListItem>
              <ListItem button disabled>
                <ListItemIcon>
                  <FeedbackIcon />
                </ListItemIcon>
                <ListItemText primary="Send Feedback" />
              </ListItem>
            </List>
          </Drawer>
          
          {/* Main content */}
          <Box sx={{ flex: 1, overflow: 'auto' }}>
            {selectedVideo ? (
              <Grid container spacing={2} sx={{ px: { xs: 1, md: 3 }, pt: 2 }}>
                <Grid item xs={12} md={showSummaryPanel ? 8 : 12}>
                  {/* Video Player */}
                  <Box sx={{ bgcolor: 'black', borderRadius: 1, overflow: 'hidden', position: 'relative', pt: '56.25%' }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                      <VideoPlayer videoId={selectedVideo.id} />
                    </Box>
                  </Box>
                  
                  {/* Video Info */}
                  <Box sx={{ mt: 2, mb: 2 }}>
                    <Typography variant="h6" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {selectedVideo.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                          {selectedVideo.views} • {selectedVideo.timestamp}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button startIcon={<ThumbUpIcon />} variant="text" color="inherit" size="small">
                          Like
                        </Button>
                        <Button startIcon={<ThumbDownIcon />} variant="text" color="inherit" size="small">
                          Dislike
                        </Button>
                        <Button startIcon={<ShareIcon />} variant="text" color="inherit" size="small">
                          Share
                        </Button>
                      </Box>
                    </Box>
                    
                    {/* Channel Info */}
                    <Box sx={{ display: 'flex', alignItems: 'center', pb: 2, borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
                      <Avatar sx={{ width: 40, height: 40, mr: 1 }}>
                        {selectedVideo.channel.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                          {selectedVideo.channel}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {Math.floor(Math.random() * 10) + 1}M subscribers
                        </Typography>
                      </Box>
                      <Button variant="contained" color="error" sx={{ ml: 'auto' }}>
                        Subscribe
                      </Button>
                    </Box>
                  </Box>
                  
                  {/* Related Videos */}
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Related Videos
                  </Typography>
                  <RelatedVideos 
                    videos={videos.filter(v => v.id !== selectedVideo.id)} 
                    onVideoSelect={handleVideoSelect} 
                  />
                </Grid>
                
                {showSummaryPanel && (
                  <Grid item xs={12} md={4}>
                    <Paper elevation={1} sx={{ borderRadius: 1, overflow: 'hidden' }}>
                      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
                        <Typography variant="h6" component="h3">
                          Smart Summary
                        </Typography>
                        <Button 
                          variant="contained" 
                          color="primary" 
                          startIcon={<SummarizeIcon />}
                          onClick={generateSummary}
                          disabled={loading}
                          size="small"
                        >
                          Generate
                        </Button>
                      </Box>
                      
                      {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                          <CircularProgress />
                        </Box>
                      ) : error ? (
                        <Box sx={{ p: 3, textAlign: 'center', color: 'error.main' }}>
                          <Typography color="error" gutterBottom>
                            Error: {error}
                          </Typography>
                          <Button 
                            variant="outlined" 
                            color="primary"
                            onClick={() => setError(null)}
                            size="small"
                            sx={{ mt: 1 }}
                          >
                            Dismiss
                          </Button>
                        </Box>
                      ) : (
                        <Box>
                          <Box sx={{ display: 'flex', borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
                            <Box 
                              onClick={() => setActiveTab('summary')}
                              sx={{ 
                                flex: 1, 
                                p: 1, 
                                textAlign: 'center', 
                                cursor: 'pointer',
                                borderBottom: activeTab === 'summary' ? '2px solid #FF0000' : 'none',
                                fontWeight: activeTab === 'summary' ? 'bold' : 'normal'
                              }}
                            >
                              Summary
                            </Box>
                            <Box 
                              onClick={() => setActiveTab('notes')}
                              sx={{ 
                                flex: 1, 
                                p: 1, 
                                textAlign: 'center', 
                                cursor: 'pointer',
                                borderBottom: activeTab === 'notes' ? '2px solid #FF0000' : 'none',
                                fontWeight: activeTab === 'notes' ? 'bold' : 'normal'
                              }}
                            >
                              Notes
                            </Box>
                          </Box>
                          
                          {activeTab === 'summary' && summary ? (
                            <SummaryDisplay summary={summary} onTimeClick={handleTimeClick} />
                          ) : activeTab === 'summary' && !summary ? (
                            <Box sx={{ p: 3, textAlign: 'center' }}>
                              <Typography color="text.secondary" gutterBottom>
                                No summary available yet.
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Click the "Generate" button above to create a summary for this video.
                              </Typography>
                            </Box>
                          ) : null}
                          
                          {activeTab === 'notes' && notes ? (
                            <NotesDisplay notes={notes} />
                          ) : activeTab === 'notes' && !summary ? (
                            <Box sx={{ p: 3, textAlign: 'center' }}>
                              <Typography color="text.secondary" gutterBottom>
                                No notes available yet.
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Click the "Generate" button above to create notes for this video.
                              </Typography>
                            </Box>
                          ) : null}
                        </Box>
                      )}
                    </Paper>
                  </Grid>
                )}
              </Grid>
            ) : (
              <Box>
                {/* Category chips */}
                <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto', py: 2, px: 3, mb: 1, '&::-webkit-scrollbar': { display: 'none' } }}>
                  {['All', 'Music', 'Education', 'Science', 'Technology', 'Gaming', 'Documentary', 'News'].map((category) => (
                    <Button 
                      key={category} 
                      variant={category === 'All' ? 'contained' : 'outlined'}
                      color={category === 'All' ? 'primary' : 'inherit'}
                      size="small"
                      sx={{ 
                        borderRadius: 5, 
                        textTransform: 'none',
                        bgcolor: category === 'All' ? 'black' : 'background.paper',
                        color: category === 'All' ? 'white' : 'text.primary',
                        '&:hover': { bgcolor: category === 'All' ? 'rgba(0,0,0,0.8)' : '' }
                      }}
                    >
                      {category}
                    </Button>
                  ))}
                </Box>
                
                {/* Video grid */}
                <Grid container spacing={2} sx={{ px: 2 }}>
                  {videos.map((video) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={video.id}>
                      <VideoCard video={video} onVideoSelect={() => handleVideoSelect(video)} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
