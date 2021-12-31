import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { ThemeColors } from "../../../utils/Theme";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundImage: ThemeColors.primaryGradient,
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

interface Props {
  progress: number;
  handleProgress?: () => void;
  handleError?: () => void;
}

export default function LinearProgressBar({
  progress,
  handleProgress,
  handleError,
}: Props) {
  const [inProgress, setInProgress] = React.useState(progress);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setInProgress((oldProgress) => {
        if (oldProgress === 100) {
          return progress;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress
        variant="determinate"
        value={inProgress}
        color="primary"
        onProgress={handleProgress}
        onError={handleError}
      />
    </Box>
  );
}
