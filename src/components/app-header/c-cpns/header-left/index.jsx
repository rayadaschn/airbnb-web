import React, { memo } from "react";
// import { IconLogo } from "@/assets/svg";
import { LeftWrapper } from "./style";

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className="logo">
        {/* <IconLogo /> */}
        <img
          class="irqavcc i1mla2as i1cqnm0r dir dir-ltr"
          aria-hidden="true"
          alt=""
          src="https://z1.muscache.cn/pictures/carson/carson-1679478687466-5517d573/original/acf9627c-88c2-420c-a4ad-c2da40626afa.png"
          data-original-uri="https://z1.muscache.cn/pictures/carson/carson-1679478687466-5517d573/original/acf9627c-88c2-420c-a4ad-c2da40626afa.png"
        ></img>
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
