import React, { SVGProps } from "react";

export function MentionArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM5.146 7.853l.003.003A.498.498 0 0 0 5.497 8h.006a.498.498 0 0 0 .35-.146l2-2a.5.5 0 1 0-.707-.708L6 6.293V3.5a.5.5 0 0 0-1 0v2.793L3.854 5.146a.5.5 0 1 0-.708.708l2 2Zm7.854.19c-.543-.597-1.291-.969-2.21-1.033c-.098.346-.23.677-.39.992A3.13 3.13 0 0 1 10.5 8c1.576 0 2.5 1.17 2.5 3c0 1.797-.966 3-2.5 3S8 12.797 8 11c0-.216.013-.423.038-.62a5.4 5.4 0 0 1-1.034.412A6.109 6.109 0 0 0 7 11c0 2.307 1.36 4 3.5 4c1.282 0 2.284-.607 2.88-1.59c.48 1.309 1.394 2.09 2.62 2.09c1.858 0 3-1.794 3-4.5a8 8 0 0 0-8.589-7.979c.158.312.286.64.383.982A7 7 0 0 1 18 11c0 2.223-.813 3.5-2 3.5s-2-1.277-2-3.5V7.5l-.008-.09A.5.5 0 0 0 13 7.5v.544Zm-9.979 2.368c.312.158.64.286.982.383a7 7 0 0 0 9.38 6.79a.5.5 0 0 1 .34.94a8 8 0 0 1-10.702-8.113Z"
      />
    </svg>
  );
}
export default MentionArrowDown;
