import type { SVGProps } from "react";

export function MobileOptimized(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2.5a.5.5 0 0 0-1 0V4H2.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5v-2Zm11 0a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H16V2.5ZM7 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H7Zm0 1h6v8H7V6ZM4.5 18a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1H4v1.5a.5.5 0 0 0 .5.5Zm11 0a.5.5 0 0 0 .5-.5V16h1.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5Zm-7-10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z"
      />
    </svg>
  );
}
export default MobileOptimized;
