import React, { SVGProps } from "react";

export function CellularOff(props: SVGProps<SVGSVGElement>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L10 10.707V15.5l.008.09A.5.5 0 0 0 11 15.5v-3.793l2 2V15.5l.008.09A.5.5 0 0 0 14 15.5v-.793l3.146 3.147a.5.5 0 0 0 .708-.708l-15-15ZM13 10.88V6.502a.5.5 0 0 1 .992-.09l.008.09v5.377l-1-1Zm3.003 3.003V4.501a.5.5 0 0 1 .992-.09l.008.09v10.381l-1-1ZM7.995 10.41a.5.5 0 0 0-.992.09v5l.008.09a.5.5 0 0 0 .992-.09v-5l-.008-.09Zm-3.003 2A.5.5 0 0 0 4 12.5v3l.008.09A.5.5 0 0 0 5 15.5v-3l-.008-.09Z"
      />
    </svg>
  );
}
export default CellularOff;
