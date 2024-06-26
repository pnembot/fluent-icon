import type { SVGProps } from "react";

export function DeveloperBoard(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 7a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm-2 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm-.5-8a.5.5 0 0 1 .5.5V4h1.5V2.5a.5.5 0 0 1 1 0V4H12V2.5a.5.5 0 0 1 1 0V4h.5A2.5 2.5 0 0 1 16 6.5V7h1.5a.5.5 0 0 1 0 1H16v1.5h1.5a.5.5 0 0 1 0 1H16V12h1.5a.5.5 0 0 1 0 1H16v.5a2.5 2.5 0 0 1-2.5 2.5H13v1.5a.5.5 0 0 1-1 0V16h-1.5v1.5a.5.5 0 0 1-1 0V16H8v1.5a.5.5 0 0 1-1 0V16h-.5A2.5 2.5 0 0 1 4 13.5V13H2.5a.5.5 0 0 1 0-1H4v-1.5H2.5a.5.5 0 0 1 0-1H4V8H2.5a.5.5 0 0 1 0-1H4v-.5A2.5 2.5 0 0 1 6.5 4H7V2.5a.5.5 0 0 1 .5-.5ZM15 6.5A1.5 1.5 0 0 0 13.5 5h-7A1.5 1.5 0 0 0 5 6.5v7A1.5 1.5 0 0 0 6.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-7Z"
      />
    </svg>
  );
}
export default DeveloperBoard;
