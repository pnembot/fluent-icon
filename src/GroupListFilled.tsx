import type { SVGProps } from "react";

export function GroupListFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.75 2a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5H3.5V3.5h1.75a.75.75 0 0 0 0-1.5h-2.5Zm0 8.5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5H3.5V12h1.75a.75.75 0 0 0 0-1.5h-2.5Zm5 1.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5ZM7 15.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75Zm0-11.5a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 7 4.25Zm.75 2.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5Z"
      />
    </svg>
  );
}
export default GroupListFilled;
