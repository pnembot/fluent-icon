import React, { SVGProps } from "react";

export function MailTemplateFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 2A2.5 2.5 0 0 0 2 4.5v9A2.5 2.5 0 0 0 4.5 16h1.535A3.53 3.53 0 0 1 6 15.5v-4A3.5 3.5 0 0 1 9.5 8h6c.17 0 .337.012.5.035V4.5A2.5 2.5 0 0 0 13.5 2h-9ZM5 4.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm2 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm5.5 7.198l-5.306-3.165A2.5 2.5 0 0 1 9.5 9h6a2.5 2.5 0 0 1 2.306 1.533L12.5 13.698Zm.256 1.011L18 11.582V15.5a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 7 15.5v-3.918l5.244 3.127a.5.5 0 0 0 .512 0Z"
      />
    </svg>
  );
}
export default MailTemplateFilled;
