import type { NextPage } from "next";
import { Button } from "../components/Button";
import { Htag } from "../components/Htag";

const Home: NextPage = () => {
  return (
    <div>
      <Htag tag="h1">abc</Htag>
      <Button>A</Button>
      <Button variant="secondary" arrow="top">
        B
      </Button>
    </div>
  );
};

export default Home;
