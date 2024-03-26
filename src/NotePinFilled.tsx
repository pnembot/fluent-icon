import React, { SVGProps } from "react";

export function NotePinFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3 9.018V14l.005.176A3 3 0 0 0 6 17h4v-4l.005-.176a3 3 0 0 1 2.819-2.819L13 10h4V6l-.005-.176A3 3 0 0 0 14 3H9.463a2.273 2.273 0 0 1-.74 3.51l-1.892.922l-.442 1.28a1.818 1.818 0 0 1-3.004.691L3 9.018Zm13.542 2.635A2 2 0 0 0 16.9 11H13l-.157.006a2 2 0 0 0-1.838 1.845L11 13l.001 3.9c.296-.096.568-.262.792-.486l4.621-4.621l.128-.14ZM8.538 3.387L6.611 1.46a1.5 1.5 0 0 0-2.409.404L3.4 3.51a1 1 0 0 1-.573.507l-1.102.38a1 1 0 0 0-.38 1.653l.948.948L1 8.29v.707h.707L3 7.706l.947.947a1 1 0 0 0 1.653-.38l.38-1.102a1 1 0 0 1 .507-.572l1.647-.803a1.5 1.5 0 0 0 .404-2.409Z"
      />
    </svg>
  );
}
export default NotePinFilled;
