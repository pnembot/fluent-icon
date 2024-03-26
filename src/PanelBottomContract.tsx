import React, { SVGProps } from "react";

export function PanelBottomContract(props: SVGProps<SVGSVGElement>) {
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
        d="m10.5 11.174l.874-.998a.5.5 0 0 1 .752.658l-1.75 2a.5.5 0 0 1-.752 0l-1.75-2a.5.5 0 1 1 .752-.658l.874.998V7.495a.5.5 0 1 1 1 0v3.68ZM4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5h-3.834a1.495 1.495 0 0 1-.287.493l-.444.507H17v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2h4.565l-.444-.507A1.496 1.496 0 0 1 6.834 11H3V6Z"
      />
    </svg>
  );
}
export default PanelBottomContract;
