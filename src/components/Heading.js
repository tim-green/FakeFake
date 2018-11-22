import React from "react";
import { Segment, Grid, Header } from "semantic-ui-react";
import "./Heading.css";

const Heading = () => (
  <Segment inverted className="cockbite-bg heading">
    <Grid centered verticalAlign="middle" className="heading__wrapper">
      <Grid.Column>
        <Header
          as="h1"
          content="FakeFake"
          textAlign="center"
          inverted
          className="heading__slogan"
        />
        <Header
          as="h2"
          content="Generate fake identites for profile testing."
          textAlign="center"
          inverted
          className="heading__description"
        />
      </Grid.Column>
    </Grid>
  </Segment>
);

export default Heading;
