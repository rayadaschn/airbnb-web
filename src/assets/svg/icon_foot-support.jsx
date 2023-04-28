import React, { memo } from "react";
import styleStrToObject from "./utils";

const IconFootSupport = memo(() => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={styleStrToObject(
        "display:block;fill:none;height:16px;width:16px;stroke:currentColor;stroke-width:4;overflow:visible"
      )}
    >
      <g fill="none">
        <path d="m4 20 11.2928932-11.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l11.2928932 11.29289322"></path>
      </g>
    </svg>
  );
});

export default IconFootSupport;