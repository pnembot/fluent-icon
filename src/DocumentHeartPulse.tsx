import React, { SVGProps } from "react";

export function DocumentHeartPulse(props: SVGProps<SVGSVGElement>) {
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
        d="M6 2a2 2 0 0 0-2 2v5.003c.338.013.674.07 1 .172V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1H9.45l-1 1H14a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6Zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7Zm-9.634 4.542A1.85 1.85 0 0 0 2.006 13H1.004a2.85 2.85 0 0 1 4.862-2.165l.137.136l.136-.136A2.85 2.85 0 0 1 11 13h-1a1.85 1.85 0 0 0-3.153-1.458l-.49.49a.5.5 0 0 1-.707 0l-.49-.49ZM2.969 16h1.414l1.62 1.62L7.623 16h1.413l-2.68 2.68a.498.498 0 0 1-.707 0L2.969 16Zm1.533-4a.5.5 0 0 1 .448.276l1.138 2.277L7.102 13.2a.5.5 0 0 1 .754-.054L8.71 14H10a.5.5 0 0 1 0 1H8.502a.5.5 0 0 1-.353-.146l-.592-.593L6.402 15.8a.5.5 0 0 1-.847-.076l-1.053-2.106l-.552 1.106a.5.5 0 0 1-.448.276H2a.5.5 0 0 1 0-1h1.193l.862-1.724A.5.5 0 0 1 4.502 12Z"
      />
    </svg>
  );
}
export default DocumentHeartPulse;
