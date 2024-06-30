import * as React from 'react';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

export default function AccordionTransition({ data, openMenu }: any) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleExpansion = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  React.useEffect(() => {
    if(!!openMenu.id){
      setExpanded(`${openMenu.id}`)
    }
  }, [openMenu.id])

  return (
    <div>

      {data.map((item: any, index: any) => (
        <Accordion
          key={index}
          expanded={openMenu.type == 'ALL' || expanded === `${item.id}`}
          onChange={handleExpansion(`${item.id}`)}
          slots={{ transition: Fade as AccordionSlots['transition'] }}
          slotProps={{ transition: { timeout: 400 } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>Custom transition using Fade - Item {index + 1}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
