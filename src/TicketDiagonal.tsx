import React, { SVGProps } from "react";

export function TicketDiagonal(props: SVGProps<SVGSVGElement>) {
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
        d="M12.032 3.237a.75.75 0 0 0-1.06 0L3.238 10.97a.75.75 0 0 0 0 1.061l.775.775a.083.083 0 0 0 .027.005a.266.266 0 0 0 .132-.035a2.25 2.25 0 0 1 3.054 3.054a.266.266 0 0 0-.035.131c0 .016.004.024.005.027l.774.775a.75.75 0 0 0 1.061 0l7.732-7.732a.75.75 0 0 0 0-1.06l-.774-.775a.085.085 0 0 0-.028-.005a.266.266 0 0 0-.131.035a2.25 2.25 0 0 1-3.054-3.054a.265.265 0 0 0 .035-.132a.087.087 0 0 0-.005-.026v-.001l-.775-.775Zm-1.768-.707a1.75 1.75 0 0 1 2.475 0l.775.775c.407.407.337.986.14 1.346a1.25 1.25 0 0 0 1.696 1.696c.36-.197.94-.266 1.346.14l.775.775a1.75 1.75 0 0 1 0 2.475L9.74 17.47a1.75 1.75 0 0 1-2.475 0l-.775-.774c-.406-.407-.337-.986-.14-1.346a1.25 1.25 0 0 0-1.696-1.696c-.36.196-.94.266-1.346-.14l-.775-.776a1.75 1.75 0 0 1 0-2.475l7.732-7.732Z"
      />
    </svg>
  );
}
export default TicketDiagonal;
