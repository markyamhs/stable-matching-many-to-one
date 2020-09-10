import React from "react";
import { OverlayTrigger, Popover, Badge } from "react-bootstrap";

const Overlay = ({ title, content }) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{title}</Popover.Title>
      <Popover.Content>{content}</Popover.Content>
    </Popover>
  );
  return (
    <OverlayTrigger
      placement="right"
      overlay={popover}
      delay={{ show: 100, hide: 200 }}
    >
      <Badge variant="info">?</Badge>
    </OverlayTrigger>
  );
};

export default Overlay;
