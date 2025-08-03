import { ReactNode, useState } from 'react';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import Box from '@mui/material/Box';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface SectionAccordionProps {
  title: string;
  children: ReactNode;
  defaultExpanded?: boolean;
  id: string;
}

const SectionAccordion = ({
  title,
  children,
  defaultExpanded = false,
  id,
}: SectionAccordionProps) => {
  const [expanded, setExpanded] = useState<boolean>(defaultExpanded);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        elevation={0}
        sx={{
          mb: 3,
          '&::before': {
            display: 'none', // Убираем верхнюю линию
          },
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden',
          '& .MuiButtonBase-root': {
            '&:focus': {
              outline: 'none',
              boxShadow: 'none',
            },
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-content`}
          id={`${id}-header`}
          disableRipple
          sx={{
            backgroundColor: 'background.paper',
            borderBottom: expanded ? 1 : 0,
            borderColor: 'divider',
            margin: '0 !important',
            padding: '0 16px!important',
            minHeight: '48px !important',
            '& .Mui-expanded': {
              margin: '0 !important',
            },
            '&:hover': {
              backgroundColor: 'action.hover',
              borderColor: 'action.selected',
            },
            '& .MuiAccordionSummary-expandIconWrapper': {
              '&:focus': {
                outline: 'none',
              },
            },
          }}
        >
          <Typography variant="h5">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 2 }}>{children}</AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default SectionAccordion;
