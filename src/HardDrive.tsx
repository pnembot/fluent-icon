import React, { SVGProps } from "react";

export function HardDrive(props: SVGProps<SVGSVGElement>) {
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
        d="M2 12c0-.398.08-.791.237-1.156l2.414-5.632A2 2 0 0 1 6.489 4h7.104c.742 0 1.43.41 1.763 1.088c.571 1.162 1.633 3.424 2.454 5.774c.13.369.19.754.19 1.138v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2Zm11.593-7H6.49a1 1 0 0 0-.919.606l-1.894 4.42C3.78 10.01 3.89 10 4 10h12c.154 0 .303.017.447.05a57.175 57.175 0 0 0-1.988-4.521a.957.957 0 0 0-.866-.529ZM16 15a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h12Zm-1.25-1.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"
      />
    </svg>
  );
}
export default HardDrive;
