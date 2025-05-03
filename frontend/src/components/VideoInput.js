import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import YouTubeIcon from '@mui/icons-material/YouTube';

function VideoInput({ onSubmit, loading }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Enter YouTube Video URL
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
          <TextField
            fullWidth
            label="YouTube URL"
            variant="outlined"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            disabled={loading}
            InputProps={{
              startAdornment: <YouTubeIcon color="primary" sx={{ mr: 1 }} />,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading || !url.trim()}
            sx={{ minWidth: '120px', height: { sm: '56px' } }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Generate'}
          </Button>
        </Box>
      </form>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Paste a YouTube video URL to generate a smart summary and notes. Works best with educational content, lectures, and tutorials.
      </Typography>
    </Paper>
  );
}

export default VideoInput;
