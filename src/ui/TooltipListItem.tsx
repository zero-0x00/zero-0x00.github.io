import { ReactNode } from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';

interface TooltipListItemProps {
  text: ReactNode;
  sx?: SxProps<Theme>;
}

const TooltipListItem = ({ text, sx }: TooltipListItemProps) => {
  return (
    <ListItem sx={{ display: 'list-item', ...sx }}>
      <ListItemText
        primary={
          <Typography component="span" variant="body2" className="techText">
            {text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default TooltipListItem;
