import React, { SVGProps } from "react";

export function MusicNote2(props: SVGProps<SVGSVGElement>) {
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
        d="M14.702 2.226A1 1 0 0 1 16 3.18V13.5a2.5 2.5 0 1 1-1-2V6.18L8 8.368V15.5a2.5 2.5 0 1 1-1-2V5.368a1 1 0 0 1 .702-.955l7-2.187ZM8 7.32l7-2.187V3.18L8 5.368V7.32ZM5.5 14a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm6.5-.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Z"
      />
    </svg>
  );
}
export default MusicNote2;