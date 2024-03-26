import React, { SVGProps } from "react";

export function TextDirectionVertical(props: SVGProps<SVGSVGElement>) {
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
        d="M5 3.5a.5.5 0 0 1 1 0v11.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.351.146h-.006a.499.499 0 0 1-.35-.146l-2-2a.5.5 0 0 1 .707-.708L5 15.293V3.5Zm8 9a.5.5 0 0 1 1 0v2.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L13 15.293V12.5Zm.5-9.5a.5.5 0 0 0-.468.324l-3 8a.5.5 0 0 0 .936.352L11.972 9h3.056l1.004 2.676a.5.5 0 0 0 .936-.352l-3-8A.5.5 0 0 0 13.5 3Zm0 1.924L14.653 8h-2.306L13.5 4.924Z"
      />
    </svg>
  );
}
export default TextDirectionVertical;
