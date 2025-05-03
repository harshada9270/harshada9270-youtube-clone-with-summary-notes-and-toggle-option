import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function VideoPlayer({ videoId }) {
  if (!videoId) {
    return null;
  }

  return (
    <Box>
      <Box className="video-container" sx={{ borderRadius: 1, overflow: 'hidden' }}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
      
      {/* Video controls - like YouTube UI */}
      <Box sx={{ display: 'flex', mt: 2, alignItems: 'center' }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton aria-label="like video">
            <ThumbUpIcon /> 
          </IconButton>
          <IconButton aria-label="dislike video">
            <ThumbDownIcon />
          </IconButton>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
          <IconButton aria-label="share video">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="download video">
            <DownloadIcon />
          </IconButton>
          <IconButton aria-label="more options">
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default VideoPlayer;
