import React from "react";
import { OverlayTrigger, Popover, Badge } from "react-bootstrap";

const Overlay = () => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );
  return (
    <OverlayTrigger
      placement="right"
      overlay={popover}
      //   delay={{ show: 250, hide: 400 }}
    >
      {/* <Button variant="secondary" className="d-inline-flex align-items-center"> */}
      <Badge variant="info">?</Badge>
      {/* <span roundedCircle>?</span> */}
      {/* <span className="ml-1">Hover to see</span> */}
      {/* </Button> */}
    </OverlayTrigger>
  );
};

export default Overlay;
