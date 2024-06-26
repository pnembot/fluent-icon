import type { SVGProps } from "react";

export function AppsAddInFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15 2.5a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 15 2.5ZM4.75 3A1.75 1.75 0 0 0 3 4.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 17 15.25v-4.5A1.75 1.75 0 0 0 15.25 9h-4a.25.25 0 0 1-.25-.25v-4A1.75 1.75 0 0 0 9.25 3h-4.5ZM4.5 4.75a.25.25 0 0 1 .25-.25h4.5a.25.25 0 0 1 .25.25v4c0 .085.006.168.018.25H4.5V4.75Zm5 5.75v5H4.75a.25.25 0 0 1-.25-.25V10.5h5Zm1.5 5v-5.018c.082.012.165.018.25.018h4a.25.25 0 0 1 .25.25v4.5a.25.25 0 0 1-.25.25H11Z"
      />
    </svg>
  );
}
export default AppsAddInFilled;
