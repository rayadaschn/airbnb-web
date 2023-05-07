import React, { memo } from "react";
import { IconSearchBar } from "@/assets/svg";
import { CenterWrapper } from "./style";

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <div className="left">全球</div>
        <div className="center">入住退房日期</div>
        <div className="right">关键词</div>
        <div className="icon">
          <IconSearchBar />
        </div>
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
