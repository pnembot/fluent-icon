import type { SVGProps } from "react";

export function Money(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 9a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm2-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2ZM3.5 4A1.5 1.5 0 0 0 2 5.5v7A1.5 1.5 0 0 0 3.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 14.5 4h-11ZM3 5.5a.5.5 0 0 1 .5-.5H5v1a1 1 0 0 1-1 1H3V5.5ZM3 8h1a2 2 0 0 0 2-2V5h6v1a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0-2 2v1H6v-1a2 2 0 0 0-2-2H3V8Zm10-3h1.5a.5.5 0 0 1 .5.5V7h-1a1 1 0 0 1-1-1V5Zm2 6v1.5a.5.5 0 0 1-.5.5H13v-1a1 1 0 0 1 1-1h1ZM5 13H3.5a.5.5 0 0 1-.5-.5V11h1a1 1 0 0 1 1 1v1Zm12-.5a2.5 2.5 0 0 1-2.5 2.5H4.085A1.5 1.5 0 0 0 5.5 16h9a3.5 3.5 0 0 0 3.5-3.5v-5a1.5 1.5 0 0 0-1-1.415V12.5Z"
      />
    </svg>
  );
}
export default Money;
