import type { SVGProps } from "react";

export function ScanTableFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 4.5A1.5 1.5 0 0 0 4.5 6v1.75a.75.75 0 0 1-1.5 0V6a3 3 0 0 1 3-3h1.75a.75.75 0 0 1 0 1.5H6ZM6 8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2H6Zm0 1v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9H6Zm6.25-6a.75.75 0 0 0 0 1.5H14A1.5 1.5 0 0 1 15.5 6v1.75a.75.75 0 0 0 1.5 0V6a3 3 0 0 0-3-3h-1.75Zm-8.5 8.5a.75.75 0 0 1 .75.75V14A1.5 1.5 0 0 0 6 15.5h1.75a.75.75 0 0 1 0 1.5H6a3 3 0 0 1-3-3v-1.75a.75.75 0 0 1 .75-.75Zm13.25.75a.75.75 0 0 0-1.5 0V14a1.5 1.5 0 0 1-1.5 1.5h-1.75a.75.75 0 0 0 0 1.5H14a3 3 0 0 0 3-3v-1.75Z"
      />
    </svg>
  );
}
export default ScanTableFilled;
