import type { SVGProps } from "react";

export function ScalesFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 3a.5.5 0 1 0 0 1h.75L2.077 9.215a.955.955 0 0 0-.075.405a3 3 0 0 0 5.996 0a.955.955 0 0 0-.075-.405L5.75 4H9.5v11h-4a1.5 1.5 0 0 0 0 3h9a1.5 1.5 0 0 0 0-3h-4V4h3.75l-2.173 5.215a.955.955 0 0 0-.075.405a3 3 0 0 0 5.996 0a.955.955 0 0 0-.075-.405L15.75 4h.75a.5.5 0 0 0 0-1h-13ZM5 4.8L6.75 9h-3.5L5 4.8ZM16.75 9h-3.5L15 4.8L16.75 9Z"
      />
    </svg>
  );
}
export default ScalesFilled;
