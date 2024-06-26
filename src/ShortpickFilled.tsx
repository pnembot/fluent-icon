import type { SVGProps } from "react";

export function ShortpickFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.5a.5.5 0 0 0 0-1H7V3h.5a.5.5 0 0 0 0-1H7Zm2.5 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm3 0a.5.5 0 0 0 0 1h.5v2h-.5a.5.5 0 0 0 0 1h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-.5Zm-3 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-5 2a.5.5 0 0 1 .5.5v8A1.5 1.5 0 0 0 6.5 17h7a1.5 1.5 0 0 0 1.5-1.5v-8a.5.5 0 0 1 1 0v8a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5v-8a.5.5 0 0 1 .5-.5ZM7 12a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H7ZM6 8a1 1 0 0 1 1-1h.5a.5.5 0 0 1 0 1H7v2h.5a.5.5 0 0 1 0 1H7a1 1 0 0 1-1-1V8Zm3-.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3 0a.5.5 0 0 1 .5-.5h.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.5a.5.5 0 0 1 0-1h.5V8h-.5a.5.5 0 0 1-.5-.5Zm-3 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default ShortpickFilled;
