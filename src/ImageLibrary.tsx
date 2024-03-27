import React, { SVGProps } from "react";

export function ImageLibrary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M16 5.764c.614.55 1 1.348 1 2.236v4.5a4.5 4.5 0 0 1-4.5 4.5H8a2.992 2.992 0 0 1-2.236-1H12.5a3.5 3.5 0 0 0 3.5-3.5V5.764zM12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h6zm-3.613 7.331l-.094.083l-3.309 3.31c.248.146.53.24.833.268L6 14h6c.31 0 .602-.07.863-.195l.153-.082l-3.309-3.309a1 1 0 0 0-1.32-.083zM12 4H6a2 2 0 0 0-1.995 1.85L4 6v6c0 .31.07.602.195.863l.082.153l3.309-3.309a2 2 0 0 1 2.701-.117l.127.117l3.31 3.309c.146-.248.24-.53.268-.833L14 12V6a2 2 0 0 0-1.85-1.995L12 4zm-.5 1.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
export default ImageLibrary;
