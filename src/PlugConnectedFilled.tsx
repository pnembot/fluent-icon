import type { SVGProps } from "react";

export function PlugConnectedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.78 3.28a.75.75 0 0 0-1.06-1.06l-2.446 2.445a4.037 4.037 0 0 0-5.128.481l-.3.3a1.49 1.49 0 0 0 0 2.108l3.6 3.6a1.49 1.49 0 0 0 2.107 0l.3-.3a4.037 4.037 0 0 0 .482-5.128L17.78 3.28ZM7.554 8.846a1.49 1.49 0 0 0-2.107 0l-.3.3a4.037 4.037 0 0 0-.481 5.128L2.22 16.72a.75.75 0 1 0 1.06 1.06l2.446-2.446a4.037 4.037 0 0 0 5.128-.48l.3-.3a1.49 1.49 0 0 0 0-2.108l-3.6-3.6Z"
      />
    </svg>
  );
}
export default PlugConnectedFilled;
