import type { SVGProps } from "react";

export function LocationOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M2.854 2.146a.5.5 0 1 0-.708.708l2.125 2.124a7.007 7.007 0 0 0 .78 8.977l1.52 1.499l2.043 1.985l.133.118c.775.628 1.91.588 2.64-.118l2.435-2.37l.272-.268l3.052 3.053a.5.5 0 0 0 .708-.708l-15-15Zm8.224 9.639A2.992 2.992 0 0 1 7.21 7.917l3.868 3.868Zm1.914-2.793a2.98 2.98 0 0 1-.394 1.485l2.883 2.883a7.006 7.006 0 0 0-.531-9.309a6.999 6.999 0 0 0-9.307-.53l2.873 2.874a2.992 2.992 0 0 1 4.476 2.598Z"
      />
    </svg>
  );
}
export default LocationOffFilled;
