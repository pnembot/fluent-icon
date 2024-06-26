import type { SVGProps } from "react";

export function Scales(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 3a.5.5 0 1 0 0 1h.75L2.077 9.215a.955.955 0 0 0-.075.405a3 3 0 0 0 5.996 0a.955.955 0 0 0-.075-.405L5.75 4H9.5v10H6a2 2 0 1 0 0 4h8a2 2 0 0 0 0-4h-3.5V4h3.75l-2.173 5.215a.955.955 0 0 0-.075.405a3 3 0 0 0 5.996 0a.955.955 0 0 0-.075-.405L15.75 4h.75a.5.5 0 0 0 0-1h-13ZM5 11.5A2.001 2.001 0 0 1 3.063 10h3.874A2.001 2.001 0 0 1 5 11.5Zm0-6.7L6.75 9h-3.5L5 4.8ZM6 15h8a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2Zm10.75-6h-3.5L15 4.8L16.75 9Zm-3.687 1h3.874a2.001 2.001 0 0 1-3.874 0Z"
      />
    </svg>
  );
}
export default Scales;
