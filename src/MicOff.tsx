import React, { SVGProps } from "react";

export function MicOff(props: SVGProps<SVGSVGElement>) {
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
        d="M12 5v4.879l.898.898c.067-.248.102-.508.102-.777V5a3 3 0 0 0-5.998-.119L8 5.879V5a2 2 0 1 1 4 0ZM7 7.707L2.146 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-3.627-3.627a5.475 5.475 0 0 1-3.019 1.25V17.5a.5.5 0 0 1-1 0v-2.022A5.5 5.5 0 0 1 4.5 10a.5.5 0 0 1 1 0a4.5 4.5 0 0 0 7.309 3.516l-1.07-1.07A3 3 0 0 1 7 10V7.706Zm4.016 4.016L8 8.707V10a2 2 0 0 0 3.016 1.723Zm3.787.959l-.742-.742A4.481 4.481 0 0 0 14.5 10a.5.5 0 0 1 1 0c0 .974-.253 1.888-.697 2.682Z"
      />
    </svg>
  );
}
export default MicOff;
