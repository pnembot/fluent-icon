import type { SVGProps } from "react";

export function ShareScreenPersonFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6.05a2.502 2.502 0 0 1 2.223-1.99A3 3 0 1 1 18 10.34V7a3 3 0 0 0-3-3H5Zm12.5 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Z"
      />
    </svg>
  );
}
export default ShareScreenPersonFilled;
