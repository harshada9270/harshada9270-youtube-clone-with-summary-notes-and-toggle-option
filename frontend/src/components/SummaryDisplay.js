import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function SummaryDisplay({ summary, onTimeClick }) {
  // Function to parse and format the summary text
  const formatSummary = (text) => {
    // Regular expression to match timestamps in various formats (00:00, 0:00, 00:00:00)
    const timestampRegex = /\b(\d{1,2}):(\d{2})(?::(\d{2}))?\b/g;
    
    // Split the text by paragraphs
    const paragraphs = text.split('\n').filter(p => p.trim() !== '');
    
    return paragraphs.map((paragraph, index) => {
      // Replace timestamps with clickable spans
      const formattedText = paragraph.replace(timestampRegex, (match) => {
        return `<span class="timestamp" data-time="${match}">${match}</span>`;
      });
      
      return (
        <div key={index} className="summary-section">
          <div 
            dangerouslySetInnerHTML={{ __html: formattedText }} 
            onClick={(e) => {
              if (e.target.className === 'timestamp') {
                onTimeClick(e.target.getAttribute('data-time'));
              }
            }}
          />
        </div>
      );
    });
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', borderRadius: 1, overflow: 'hidden' }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
        <AccessTimeIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6" component="h3">
          Smart Video Summary
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2, maxHeight: '500px', overflow: 'auto' }}>
        {summary ? (
          <>
            <Box>
              {formatSummary(summary)}
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2, fontStyle: 'italic' }}>
              Click on any timestamp to jump to that point in the video.
            </Typography>
          </>
        ) : (
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
            No summary available. Click "Generate Summary" to create one.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default SummaryDisplay;
