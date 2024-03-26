import React, { SVGProps } from "react";

export function ArrowMaximize(props: SVGProps<SVGSVGElement>) {
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
        d="m10.5 3l6.043.002l.085.015l.063.02l.076.04l.055.04l.06.06l.03.038l.041.074l.03.083l.015.082L17 3.5v6a.5.5 0 0 1-.992.09L16 9.5V4.706L4.706 16H9.5a.5.5 0 0 1 .492.41l.008.09a.5.5 0 0 1-.41.492L9.5 17H3.48l-.069-.008l-.102-.03l-.076-.04l-.055-.04l-.06-.06l-.03-.037l-.041-.074l-.03-.083l-.006-.023A.499.499 0 0 1 3 16.5l.005.074l-.003-.031L3 10.5a.5.5 0 0 1 .992-.09L4 10.5v4.792L15.292 4H10.5a.5.5 0 0 1-.492-.41L10 3.5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default ArrowMaximize;
