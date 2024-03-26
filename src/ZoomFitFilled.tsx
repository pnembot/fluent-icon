import React, { SVGProps } from "react";

export function ZoomFitFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3.861 7.846a.5.5 0 0 0-.72-.694L1.4 8.958a1.5 1.5 0 0 0 0 2.082l1.74 1.807a.5.5 0 1 0 .72-.694l-1.74-1.807a.5.5 0 0 1 0-.694l1.74-1.806ZM7.153 3.14a.5.5 0 0 0 .694.72l1.806-1.741a.5.5 0 0 1 .694 0l1.806 1.74a.5.5 0 0 0 .694-.719l-1.805-1.741a1.5 1.5 0 0 0-2.083 0l-1.806 1.74Zm9.707 4.012a.5.5 0 1 0-.72.694l1.746 1.811a.5.5 0 0 1 0 .695l-1.745 1.8a.5.5 0 0 0 .718.696l1.744-1.8a1.5 1.5 0 0 0 .003-2.085L16.86 7.152ZM7.847 16.14a.5.5 0 1 0-.694.72l1.812 1.745a1.5 1.5 0 0 0 2.084-.003l1.799-1.743a.5.5 0 0 0-.696-.718l-1.799 1.743a.5.5 0 0 1-.694 0L7.847 16.14ZM6 8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z"
      />
    </svg>
  );
}
export default ZoomFitFilled;