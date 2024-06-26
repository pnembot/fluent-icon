import type { SVGProps } from "react";

export function RssFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm.5 3a7.5 7.5 0 0 1 7.5 7.5a.5.5 0 0 1-1 0A6.5 6.5 0 0 0 6.5 7a.5.5 0 0 1 0-1ZM6 9.5a.5.5 0 0 1 .5-.5a4.5 4.5 0 0 1 4.5 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 0 0 6.5 10a.5.5 0 0 1-.5-.5ZM7 14a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default RssFilled;
