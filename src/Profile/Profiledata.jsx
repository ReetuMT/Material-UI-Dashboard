import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function Profiledata() {
  const [open, setOpen] = React.useState(true);
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" style={{fontWeight:600,fontSize:24}}>
          Reetu M Tambre
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="ritreetu642@gmail.com" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LocationOnIcon/>
        </ListItemIcon>
        <ListItemText primary="Harihar" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PhoneAndroidIcon/>
        </ListItemIcon>
        <ListItemText primary="(+91) *******69" />
      </ListItemButton>
    </List>
  );
}