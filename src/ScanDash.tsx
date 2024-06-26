import type { SVGProps } from "react";

export function ScanDash(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v1.5a.5.5 0 0 0 1 0V6a2 2 0 0 1 2-2h1.5a.5.5 0 0 0 0-1H6Zm6.5 0a.5.5 0 0 0 0 1H14a2 2 0 0 1 2 2v1.5a.5.5 0 0 0 1 0V6a3 3 0 0 0-3-3h-1.5ZM4 12.5a.5.5 0 0 0-1 0V14a3 3 0 0 0 3 3h1.5a.5.5 0 0 0 0-1H6a2 2 0 0 1-2-2v-1.5Zm13 0a.5.5 0 0 0-1 0V14a2 2 0 0 1-2 2h-1.5a.5.5 0 0 0 0 1H14a3 3 0 0 0 3-3v-1.5Zm-10.5-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z"
      />
    </svg>
  );
}
export default ScanDash;
