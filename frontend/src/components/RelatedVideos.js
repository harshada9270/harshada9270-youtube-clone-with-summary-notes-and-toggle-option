import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

// Function to generate realistic video durations based on video category and title
const getVideoDuration = (video) => {
  // All videos will be 15-19 minutes long
  const minutes = Math.floor(Math.random() * 4) + 15; // Random between 15-18
  const seconds = Math.floor(Math.random() * 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

function RelatedVideos({ videos, onVideoSelect }) {
  return (
    <Box>
      <Grid container spacing={1}>
        {videos.slice(0, 10).map((video) => (
          <Grid item xs={12} key={video.id}>
            <Card sx={{ display: 'flex', boxShadow: 'none', bgcolor: 'transparent' }}>
              <CardActionArea sx={{ display: 'flex' }} onClick={() => onVideoSelect(video)}>
                {/* Thumbnail with duration */}
                <Box sx={{ position: 'relative', minWidth: 168, mr: 1 }}>
                  <CardMedia
                    component="img"
                    sx={{ 
                      width: 168, 
                      height: 94, 
                      borderRadius: 1,
                      objectFit: 'cover'
                    }}
                    image={video.thumbnail}
                    alt={video.title}
                  />
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      bottom: 4, 
                      right: 4, 
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
                
                {/* Video info */}
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                  <Tooltip title={video.title}>
                    <Typography variant="subtitle2" component="div" sx={{ 
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      lineHeight: '1.2em',
                      maxHeight: '2.4em',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      mb: 0.5
                    }}>
                      {video.title}
                    </Typography>
                  </Tooltip>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                    {video.channel}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                    {video.views} • {video.timestamp}
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default RelatedVideos;
