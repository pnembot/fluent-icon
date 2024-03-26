import React, { SVGProps } from "react";

export function Person5(props: SVGProps<SVGSVGElement>) {
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
        d="M6 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6ZM3 13c0-1.113.903-2 2.009-2h7.577a1.516 1.516 0 0 0-.066.253l-.124.747H5.009C4.448 12 4 12.447 4 13c0 1.309.622 2.284 1.673 2.953C6.743 16.636 8.265 17 10 17c.777 0 1.511-.073 2.181-.215c-.171.317-.225.69-.144 1.046c-.65.114-1.334.169-2.037.169c-1.855 0-3.583-.386-4.865-1.203C3.833 15.967 3 14.69 3 13Zm11-2a.5.5 0 0 0-.493.418l-.5 3a.5.5 0 0 0 .559.578l.08-.011l.217-.028a130.744 130.744 0 0 1 1.384-.171a13.804 13.804 0 0 1 .348-.034l.03-.002a1.625 1.625 0 0 1 0 3.25a2.56 2.56 0 0 1-1.002-.23c-.34-.153-.583-.35-.699-.535a.5.5 0 0 0-.848.53c.26.415.698.719 1.137.916c.446.2.953.319 1.412.319a2.625 2.625 0 0 0 0-5.25c-.095 0-.291.02-.489.042a59.762 59.762 0 0 0-1.032.126l.32-1.918H17.5a.5.5 0 0 0 0-1H14Z"
      />
    </svg>
  );
}
export default Person5;