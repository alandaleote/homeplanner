import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function MyList() {

  const handleClickList = (index) => {
    return index;
  };

  const handleClickMore = () => {
    return;
  }

  const data = [
    { id: 0, icon: <InboxIcon />, label: 'Lista de Compras' },
    { id: 1, icon: <WorkIcon />, label: 'Mala para Viagem' },
    { id: 2, icon: <BeachAccessIcon />, label: 'Lista de Ferias' },
    { id: 3, icon: <ImageIcon />, label: 'Lista de Fotos' },
  ];

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {data.map((item) => {
        const labelId = `list-label-${item.id}`;
        return (
          <ListItem
            key={item.id}
            secondaryAction={
              <IconButton onClick={handleClickMore}>
                <MoreVertIcon />
              </IconButton>
            }
          >
            <ListItemButton
              onClick={handleClickList(item.id)}
            >
              <ListItemAvatar>
                <Avatar>
                  {item.icon}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
