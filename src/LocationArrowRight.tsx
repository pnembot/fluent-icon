import React, { SVGProps } from "react";

export function LocationArrowRight(props: SVGProps<SVGSVGElement>) {
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
        d="M14.95 4.051a7.005 7.005 0 0 1 0 9.904l-1.128 1.114l-2.436 2.37a1.993 1.993 0 0 1-2.64.118l-.132-.118l-2.043-1.985l-1.52-1.499a7.005 7.005 0 0 1 0-9.904a6.998 6.998 0 0 1 9.899 0Zm-.705.705a6.002 6.002 0 0 0-8.49 0a6.008 6.008 0 0 0-.176 8.31l.176.184l.571.567l2.981 2.905l.093.08a.997.997 0 0 0 1.2 0l.093-.08l2.23-2.168l1.322-1.304l.176-.183a6.008 6.008 0 0 0-.176-8.31Zm-4.099 1.598a.5.5 0 0 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L11.793 9H7a.5.5 0 0 1 0-1h4.793l-1.647-1.646Z"
      />
    </svg>
  );
}
export default LocationArrowRight;