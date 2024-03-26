import React, { SVGProps } from "react";

export function VoicemailArrowForward(props: SVGProps<SVGSVGElement>) {
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
        d="M8.732 9A2 2 0 1 1 7 8h6a2 2 0 0 1 1.735 1.005a5.602 5.602 0 0 0-1.295.097a1 1 0 0 0-1.331.444a5.51 5.51 0 0 0-1.094.699A2.02 2.02 0 0 1 11.268 9H8.732ZM6 10a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm11-4v3.6c.358.183.693.404 1 .657V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.207a5.48 5.48 0 0 1-.185-1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Zm-7 8.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm5.396-2.604a.5.5 0 0 1 .708 0l1.75 1.75a.5.5 0 0 1 .002.705l-1.752 1.753a.5.5 0 0 1-.708-.708l.897-.896H14.75A1.75 1.75 0 0 0 13 16.25v.25a.5.5 0 0 1-1 0v-.25a2.75 2.75 0 0 1 2.75-2.75h1.543l-.897-.896a.5.5 0 0 1 0-.708Z"
      />
    </svg>
  );
}
export default VoicemailArrowForward;
