import React, { memo } from "react";
import FeedbackWrapper from "./style";
import { CircularProgress } from "@mui/material";

const AppFeedback = memo(() => {
  return (
    <FeedbackWrapper>
      <CircularProgress />
    </FeedbackWrapper>
  );
});

export default AppFeedback;
