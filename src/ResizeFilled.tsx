import type { SVGProps } from "react";

export function ResizeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.25 2A3.25 3.25 0 0 0 2 5.25v3a.75.75 0 0 0 1.5 0v-3c0-.966.784-1.75 1.75-1.75h3a.75.75 0 0 0 0-1.5h-3Zm6.5 0a.75.75 0 0 0 0 1.5h3c.966 0 1.75.784 1.75 1.75v3a.75.75 0 0 0 1.5 0v-3A3.25 3.25 0 0 0 14.75 2h-3Zm-9 9a.75.75 0 0 1 .75.75v3c0 .966.784 1.75 1.75 1.75h3a.75.75 0 0 1 0 1.5h-3A3.25 3.25 0 0 1 2 14.75v-3a.75.75 0 0 1 .75-.75Zm15.25.75a.75.75 0 0 0-1.5 0v3a1.75 1.75 0 0 1-1.75 1.75h-3a.75.75 0 0 0 0 1.5h3A3.25 3.25 0 0 0 18 14.75v-3Z"
      />
    </svg>
  );
}
export default ResizeFilled;
