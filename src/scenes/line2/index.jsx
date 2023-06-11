import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart2 from "../../components/LineChart2";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Vewiers" subtitle="Veiwers over them last year" />
      <Box height="75vh">
        <LineChart2 />
      </Box>
    </Box>
  );
};

export default Line;