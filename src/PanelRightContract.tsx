import React, { SVGProps } from "react";

export function PanelRightContract(props: SVGProps<SVGSVGElement>) {
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
        d="m9.179 10.5l-.998.874a.5.5 0 1 0 .658.752l2-1.75a.5.5 0 0 0 0-.752l-2-1.75a.5.5 0 1 0-.658.752l.998.874H5.5a.5.5 0 0 0 0 1h3.679ZM16 16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12Zm1-2a1 1 0 0 1-1 1h-3V5h3a1 1 0 0 1 1 1v8Zm-5-9v10H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8Z"
      />
    </svg>
  );
}
export default PanelRightContract;
