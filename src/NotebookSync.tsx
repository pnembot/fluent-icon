import React, { SVGProps } from "react";

export function NotebookSync(props: SVGProps<SVGSVGElement>) {
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
        d="M5.5 4.5A.5.5 0 0 0 5 5v2a.5.5 0 0 0 .5.5h7A.5.5 0 0 0 13 7V5a.5.5 0 0 0-.5-.5h-7Zm.5 2v-1h6v1H6ZM3 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9.743c.253-.307.474-.642.657-1H13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5.207c-.349.099-.683.23-1 .393V4Zm13 2h.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5H16V6Zm.5 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5ZM16 13h.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H16V13ZM1 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h.468a1.99 1.99 0 0 0-.933-.25a2 2 0 0 0-1.45.586a.5.5 0 0 1-.706-.707A3 3 0 0 1 7 12.152V12a.5.5 0 0 1 .5-.5Zm-.876 5.532A2.999 2.999 0 0 1 4 16.848V17a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H5a.5.5 0 0 1 0 1h-.468a1.99 1.99 0 0 0 .933.25a2 2 0 0 0 1.45-.586a.5.5 0 0 1 .706.707a3 3 0 0 1-.997.66Z"
      />
    </svg>
  );
}
export default NotebookSync;