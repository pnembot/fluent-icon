import type { SVGProps } from "react";

export function StethoscopeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.75 2a.75.75 0 0 0-.75.75v5c0 2.23 1.622 4.08 3.75 4.438v1.062a5.25 5.25 0 1 0 10.5 0v-1.104a2.751 2.751 0 1 0-1.5 0v1.104a3.75 3.75 0 1 1-7.5 0v-1.062A4.501 4.501 0 0 0 11 7.75v-5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h.75v4.25a3 3 0 1 1-6 0V3.5h.75a.75.75 0 0 0 0-1.5h-1.5ZM15.5 8.25a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z"
      />
    </svg>
  );
}
export default StethoscopeFilled;
