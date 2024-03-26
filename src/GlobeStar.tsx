import React, { SVGProps } from "react";

export function GlobeStar(props: SVGProps<SVGSVGElement>) {
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
        d="M10.254 17.996a8 8 0 1 1 7.742-7.742a5.506 5.506 0 0 0-1.008-.66A6.967 6.967 0 0 0 16.54 7.5h-2.733c.078.49.134 1 .165 1.525a5.48 5.48 0 0 0-.992.188a14.453 14.453 0 0 0-.186-1.713H7.206A14.87 14.87 0 0 0 7 10c0 .883.073 1.725.206 2.5h2.169a5.46 5.46 0 0 0-.284 1H7.419c.153.59.342 1.126.56 1.592c.48 1.028 1.041 1.614 1.577 1.821c.19.39.425.752.698 1.083Zm1.768-13.088C11.407 3.59 10.657 3 10 3c-.657 0-1.407.59-2.022 1.908A9.251 9.251 0 0 0 7.42 6.5h5.162a9.246 9.246 0 0 0-.56-1.592ZM6.389 6.5c.176-.743.407-1.422.683-2.015c.186-.399.401-.773.642-1.103A7.022 7.022 0 0 0 3.936 6.5H6.39ZM6 10c0-.87.067-1.712.193-2.5H3.46A6.984 6.984 0 0 0 3 10c0 .88.163 1.724.46 2.5h2.733A15.969 15.969 0 0 1 6 10Zm1.072 5.515a10.501 10.501 0 0 1-.683-2.015H3.936a7.022 7.022 0 0 0 3.778 3.118a6.63 6.63 0 0 1-.642-1.103ZM16.064 6.5a7.021 7.021 0 0 0-3.778-3.118c.241.33.456.704.642 1.103c.276.593.507 1.272.683 2.015h2.453ZM14.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm.954-5.608h1.544c.485 0 .687.647.295.944l-1.25.947l.477 1.532c.15.48-.378.88-.77.583l-1.25-.947l-1.25.947c-.392.297-.92-.103-.77-.583l.477-1.532l-1.25-.947c-.392-.297-.19-.944.294-.944h1.546l.477-1.531a.494.494 0 0 1 .952 0l.477 1.531Z"
      />
    </svg>
  );
}
export default GlobeStar;
