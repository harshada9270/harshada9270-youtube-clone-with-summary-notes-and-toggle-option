import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import NoteIcon from '@mui/icons-material/Note';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function NotesDisplay({ notes }) {
  // Function to parse and format the notes text
  const formatNotes = (text) => {
    if (!text) return [];
    
    // Split the text by lines
    const lines = text.split('\n').filter(line => line.trim() !== '');
    
    return lines.map((line, index) => {
      // Check if the line is a bullet point
      const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('*');
      
      // If it's a bullet point, format it accordingly
      if (isBullet) {
        return (
          <ListItem key={index} sx={{ py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: 24 }}>
              <FiberManualRecordIcon sx={{ fontSize: 8 }} />
            </ListItemIcon>
            <ListItemText primary={line.trim().substring(1).trim()} />
          </ListItem>
        );
      }
      
      // If it's a heading or regular text
      return (
        <ListItem key={index} sx={{ py: 0.5 }}>
          <ListItemText primary={line} />
        </ListItem>
      );
    });
  };

  const downloadNotes = () => {
    const element = document.createElement('a');
    const file = new Blob([notes], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'youtube-notes.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', borderRadius: 1, overflow: 'hidden' }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NoteIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6" component="h3">
            Smart Video Notes
          </Typography>
        </Box>
        {notes && (
          <Button 
            variant="outlined" 
            size="small" 
            startIcon={<FileDownloadIcon />}
            onClick={downloadNotes}
          >
            Download
          </Button>
        )}
      </Box>
      <Divider />
      <Box sx={{ maxHeight: '500px', overflow: 'auto' }}>
        {notes ? (
          <List dense sx={{ py: 0 }}>
            {formatNotes(notes)}
          </List>
        ) : (
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 4, px: 2 }}>
            No notes available. Click "Generate Summary" to create notes.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default NotesDisplay;
