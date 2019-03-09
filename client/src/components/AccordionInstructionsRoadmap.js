import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import "../add_roadmap_components/AccordionComponent.css";
import Pink from "../images/pink_circle.png";
import Green from "../images/green_circle.png";

class AccordionInstructionsRoadmap extends Component {
  state = { activeIndex: 1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <Accordion style={{ marginBottom: "2rem" }}>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p className="InstructionsParagraph">
            👉 Click on <img src={Pink} style={{ height: "12px" }} /> to toggle
            between bubbles & show details
          </p>
          <p className="InstructionsParagraph">
            👉 Click on <img src={Green} style={{ height: "12px" }} /> to show
            transition text
          </p>
          <p className="InstructionsParagraph">
            👉 Click on the bubbles themselves to expand or contract nodes
          </p>
        </Accordion.Content>
      </Accordion>
    );
  }
}

export default AccordionInstructionsRoadmap;
