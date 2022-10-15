import { P } from "components/P";
import type { NextPage } from "next";
import { Button } from "../components/Button";
import { H } from "../components/H";

const Home: NextPage = () => {
  return (
    <div>
      <H tag="h1">abc</H>
      <Button arrow="top">A</Button>
      <Button variant="secondary" arrow="top">
        t
      </Button>
      <Button variant="secondary" arrow="right">
        r
      </Button>
      <Button variant="secondary" arrow="bottom">
        b
      </Button>
      <Button variant="secondary" arrow="left">
        l
      </Button>
      <P size="s">sssssss</P>
      <P size="m">mmmmmmm</P>
      <P size="l">llllllll</P>
    </div>
  );
};

export default Home;
