import type { SVGProps } from "react";

export function BackpackFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 8.7a.7.7 0 0 1 .7-.7h2.6a.7.7 0 0 1 .7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3ZM10 2a2.5 2.5 0 0 0-2.5 2.5v.044A6.001 6.001 0 0 0 4 10v2h12v-2a6.001 6.001 0 0 0-3.5-5.456V4.5A2.5 2.5 0 0 0 10 2Zm0 2c.506 0 .997.063 1.466.18a1.5 1.5 0 0 0-2.932 0C9.004 4.063 9.494 4 10 4ZM8.7 7h2.6A1.7 1.7 0 0 1 13 8.7a1.3 1.3 0 0 1-1.3 1.3H8.3A1.3 1.3 0 0 1 7 8.7A1.7 1.7 0 0 1 8.7 7ZM7 14.5V13H4v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2H8v1.5a.5.5 0 0 1-1 0Z"
      />
    </svg>
  );
}
export default BackpackFilled;
