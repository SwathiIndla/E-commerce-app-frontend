import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

export default function Sidebar() {
  return (
    <div style={{ height: '100vh' }}>
      <aside>
        <Accordion>
          <AccordionSummary>Details</AccordionSummary>
          <AccordionDetails>
            <div>
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Details</AccordionSummary>
          <AccordionDetails>
            <div>
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Details</AccordionSummary>
          <AccordionDetails>
            <div>
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Details</AccordionSummary>
          <AccordionDetails>
            <div>
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Details</AccordionSummary>
          <AccordionDetails>
            <div>
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Details</AccordionSummary>
          <AccordionDetails>
            <div>
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
          </AccordionDetails>
        </Accordion>
      </aside>
    </div>
  );
}
