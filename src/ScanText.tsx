import type { SVGProps } from "react";

export function ScanText(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 4a2 2 0 0 0-2 2v1.5a.5.5 0 0 1-1 0V6a3 3 0 0 1 3-3h1.5a.5.5 0 0 1 0 1H6Zm0 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0 3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm6-9a.5.5 0 0 0 0 1H14a2 2 0 0 1 2 2v1.5a.5.5 0 0 0 1 0V6a3 3 0 0 0-3-3h-1.5Zm-9 9a.5.5 0 0 1 .5.5V14a2 2 0 0 0 2 2h1.5a.5.5 0 0 1 0 1H6a3 3 0 0 1-3-3v-1.5a.5.5 0 0 1 .5-.5Zm13.5.5a.5.5 0 0 0-1 0V14a2 2 0 0 1-2 2h-1.5a.5.5 0 0 0 0 1H14a3 3 0 0 0 3-3v-1.5Z"
      />
    </svg>
  );
}
export default ScanText;
