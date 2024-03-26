import React, { SVGProps } from "react";

export function DocumentContract(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="m7.207 10.5l.647-.646a.5.5 0 1 0-.708-.708l-.646.647l-.646-.647a.5.5 0 1 0-.708.708l.647.646l-.647.646a.501.501 0 0 0 .708.708l.646-.647l.646.647a.5.5 0 1 0 .708-.708l-.647-.646ZM3.586 1.586A2 2 0 0 1 5 1h3.586a1.5 1.5 0 0 1 1.06.439l2.915 2.915A1.5 1.5 0 0 1 13 5.414V13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 .586-1.414ZM12 11V6H9.5A1.5 1.5 0 0 1 8 4.5V2H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1H9.5a.5.5 0 0 1 0-1H12ZM9.5 5h2.293L9 2.207V4.5a.5.5 0 0 0 .5.5Z"
      />
    </svg>
  );
}
export default DocumentContract;
