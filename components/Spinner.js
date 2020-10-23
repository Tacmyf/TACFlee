import { CubeGrid } from "styled-loaders-react";
import { Box } from "@chakra-ui/core";

const Spinner = () => (
  <div className="loader">
    <div className="cube">
      <CubeGrid color="#304FFF" />
    </div>
  </div>
);

export default Spinner;
