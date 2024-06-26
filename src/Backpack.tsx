import type { SVGProps } from "react";

export function Backpack(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.7 7A1.7 1.7 0 0 0 7 8.7A1.3 1.3 0 0 0 8.3 10h3.4A1.3 1.3 0 0 0 13 8.7A1.7 1.7 0 0 0 11.3 7H8.7ZM8 8.7a.7.7 0 0 1 .7-.7h2.6a.7.7 0 0 1 .7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3ZM10 2a2.5 2.5 0 0 0-2.5 2.5v.044A6.001 6.001 0 0 0 4 10v5a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-5a6.001 6.001 0 0 0-3.5-5.456V4.5A2.5 2.5 0 0 0 10 2Zm5 10H5v-2a5 5 0 0 1 10 0v2Zm-8 2.5a.5.5 0 0 0 1 0V13h7v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h2v1.5ZM10 4a6.05 6.05 0 0 0-1.466.18a1.5 1.5 0 0 1 2.932 0C10.996 4.063 10.506 4 10 4Z"
      />
    </svg>
  );
}
export default Backpack;
