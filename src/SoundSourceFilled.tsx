import React, { SVGProps } from "react";

export function SoundSourceFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3 10a7 7 0 1 1 12.14 4.752l.65.768a8 8 0 1 0-11.58 0l.65-.768A6.975 6.975 0 0 1 3 10Zm11.162 3.596a5.5 5.5 0 1 0-8.323 0l.655-.775a4.5 4.5 0 1 1 7.012 0l.656.775Zm-1.652-1.952a3 3 0 1 0-5.02 0l.69-.815a2 2 0 1 1 3.641 0l.689.815Zm-2.128-.967a.5.5 0 0 0-.764 0l-5.5 6.5A.5.5 0 0 0 4.5 18h11a.5.5 0 0 0 .382-.823l-5.5-6.5Z"
      />
    </svg>
  );
}
export default SoundSourceFilled;
