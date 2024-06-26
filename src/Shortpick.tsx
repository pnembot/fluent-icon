import type { SVGProps } from "react";

export function Shortpick(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.5a.5.5 0 0 0 0-1H7V3h.5a.5.5 0 0 0 0-1H7Zm2.5 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm3 0a.5.5 0 0 0 0 1h.5v2h-.5a.5.5 0 0 0 0 1h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-.5Zm-3 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM5 7.5a.5.5 0 0 0-1 0v8A2.5 2.5 0 0 0 6.5 18h7a2.5 2.5 0 0 0 2.5-2.5v-8a.5.5 0 0 0-1 0v8a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 15.5v-8ZM7 12a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H7Zm0 1h6v2H7v-2ZM6 8a1 1 0 0 1 1-1h.5a.5.5 0 0 1 0 1H7v2h.5a.5.5 0 0 1 0 1H7a1 1 0 0 1-1-1V8Zm3-.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3 0a.5.5 0 0 1 .5-.5h.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.5a.5.5 0 0 1 0-1h.5V8h-.5a.5.5 0 0 1-.5-.5Zm-3 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default Shortpick;
