import type { SVGProps } from "react";

export function LocationAddRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.95 13.955a7.005 7.005 0 0 0 0-9.904a6.998 6.998 0 0 0-9.9 0a7.005 7.005 0 0 0 0 9.904l1.521 1.499l2.043 1.985l.133.118c.775.628 1.91.588 2.64-.118l2.435-2.37l1.128-1.114Zm-4.804-7.601a.5.5 0 0 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L11.793 9H7a.5.5 0 0 1 0-1h4.793l-1.647-1.646Z"
      />
    </svg>
  );
}
export default LocationAddRightFilled;
