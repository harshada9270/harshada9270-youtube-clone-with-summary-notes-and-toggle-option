import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';

// Function to generate realistic video durations based on video category and title
const getVideoDuration = (video) => {
  // All videos will be 15-19 minutes long
  const minutes = Math.floor(Math.random() * 4) + 15; // Random between 15-18
  const seconds = Math.floor(Math.random() * 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

function VideoCard({ video, onVideoSelect }) {
  return (
    <Card sx={{ maxWidth: '100%', boxShadow: 'none', bgcolor: 'transparent' }}>
      <CardActionArea onClick={onVideoSelect} sx={{ display: 'block' }}>
        {/* Thumbnail with video duration */}
        <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', mb: 1 }}>
          <CardMedia
            component="img"
            image={video.thumbnail}
            alt={video.title}
            sx={{ 
              width: '100%',
              aspectRatio: '16/9',
              objectFit: 'cover',
              display: 'block'
            }}
          />
          <Box 
            sx={{ 
              position: 'absolute', 
              bottom: 8, 
              right: 8, 
              bgcolor: 'rgba(0,0,0,0.8)', 
              color: 'white',
              borderRadius: 0.5,
              px: 0.5,
              py: 0.1,
              fontSize: '12px',
              fontWeight: 'bold'
            }}
          >
            {getVideoDuration(video)}
          </Box>
        </Box>
        
        {/* Video info with channel avatar */}
        <Grid container spacing={1}>
          <Grid item xs={2} sm={2} md={2}>
            <Tooltip title={video.channel}>
              <Avatar 
                sx={{ width: 36, height: 36 }}
                alt={video.channel}
              >
                {video.channel.charAt(0)}
              </Avatar>
            </Tooltip>
          </Grid>
          <Grid item xs={10} sm={10} md={10}>
            <Tooltip title={video.title}>
              <Typography 
                variant="subtitle1" 
                component="div" 
                sx={{ 
                  fontWeight: 500, 
                  fontSize: '0.95rem',
                  lineHeight: 1.2,
                  mb: 0.5,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  height: '2.4em'
                }}
              >
                {video.title}
              </Typography>
            </Tooltip>
            <Box sx={{ color: 'text.secondary' }}>
              <Typography variant="body2" component="div" sx={{ fontSize: '0.8rem' }}>
                {video.channel}
              </Typography>
              <Typography variant="body2" component="div" sx={{ fontSize: '0.8rem' }}>
                {video.views} • {video.timestamp}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}

export default VideoCard;
