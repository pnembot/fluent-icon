import React, { SVGProps } from "react";

export function Gauge(props: SVGProps<SVGSVGElement>) {
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
        d="M12.466 5.057a.5.5 0 0 1-.647.284a5.001 5.001 0 0 0-5.355 8.195a.5.5 0 1 1-.707.707a6 6 0 0 1 6.425-9.834a.5.5 0 0 1 .284.648Zm2.478 2.477a.5.5 0 0 1 .647.285a6.001 6.001 0 0 1-1.348 6.424a.5.5 0 1 1-.707-.707a5.001 5.001 0 0 0 1.123-5.354a.5.5 0 0 1 .284-.648Zm-.859-1.715a.5.5 0 0 0-.635-.011l-.177.14a335.172 335.172 0 0 0-1.91 1.531c-.532.431-1.078.877-1.513 1.242c-.218.182-.41.346-.56.478a3.97 3.97 0 0 0-.344.328a1.5 1.5 0 1 0 2.282 1.948c.072-.084.17-.232.27-.39c.107-.17.239-.385.385-.628c.292-.488.646-1.096.989-1.69a300.727 300.727 0 0 0 1.213-2.126l.111-.196a.5.5 0 0 0-.11-.626ZM10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm0-1a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"
      />
    </svg>
  );
}
export default Gauge;