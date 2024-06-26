import type { SVGProps } from "react";

export function ScanDashFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.25 3A3.25 3.25 0 0 0 3 6.25v1.346a.75.75 0 1 0 1.5 0V6.25c0-.966.784-1.75 1.75-1.75h1.346a.75.75 0 1 0 0-1.5H6.25Zm6.154 0a.75.75 0 0 0 0 1.5h1.346c.966 0 1.75.784 1.75 1.75v1.346a.75.75 0 0 0 1.5 0V6.25A3.25 3.25 0 0 0 13.75 3h-1.346ZM4.5 12.404a.75.75 0 0 0-1.5 0v1.346A3.25 3.25 0 0 0 6.25 17h1.346a.75.75 0 0 0 0-1.5H6.25a1.75 1.75 0 0 1-1.75-1.75v-1.346Zm12.5 0a.75.75 0 0 0-1.5 0v1.346a1.75 1.75 0 0 1-1.75 1.75h-1.346a.75.75 0 0 0 0 1.5h1.346A3.25 3.25 0 0 0 17 13.75v-1.346ZM6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z"
      />
    </svg>
  );
}
export default ScanDashFilled;
