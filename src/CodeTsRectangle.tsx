import React, { SVGProps } from "react";

export function CodeTsRectangle(props: SVGProps<SVGSVGElement>) {
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
        d="M10.865 8.969a1.425 1.425 0 0 1-.4 1.723A1.43 1.43 0 0 1 9.58 11h-.146c-.378 0-.741-.15-1.009-.418A1.431 1.431 0 0 1 8 9.573a.533.533 0 0 1 .5-.537a.462.462 0 0 1 .349.127A.47.47 0 0 1 9 9.5a.449.449 0 0 0 .427.5h.146a.428.428 0 0 0 .362-.649a.414.414 0 0 0-.172-.157l-.976-.492a1.424 1.424 0 0 1-.744-1.601A1.426 1.426 0 0 1 9.427 6h.146A1.43 1.43 0 0 1 11 7.427a.535.535 0 0 1-.5.537a.465.465 0 0 1-.459-.281A.47.47 0 0 1 10 7.5v-.073a.428.428 0 0 0-.425-.425h-.146a.428.428 0 0 0-.362.649c.041.068.1.122.172.157l.976.489c.286.145.515.381.65.672ZM4 6a.5.5 0 1 0 0 1h1v3.5a.5.5 0 0 0 1 0V7h1a.5.5 0 1 0 0-1H4ZM2.75 3A1.75 1.75 0 0 0 1 4.75v7.5c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0 0 14 12.25v-7.5A1.75 1.75 0 0 0 12.25 3h-9.5ZM2 4.75A.75.75 0 0 1 2.75 4h9.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75v-7.5Z"
      />
    </svg>
  );
}
export default CodeTsRectangle;