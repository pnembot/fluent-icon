import type { SVGProps } from "react";

export function DocumentMultipleProhibited(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 2a2 2 0 0 0-2 2v5.022a5.5 5.5 0 0 1 1 .185V4a1 1 0 0 1 1-1h3v3.5A1.5 1.5 0 0 0 12.5 8H16v6a1 1 0 0 1-1 1h-4.022a5.489 5.489 0 0 1-.185 1H15a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 11.586 2H8Zm4 4.5V3.207L15.793 7H12.5a.5.5 0 0 1-.5-.5ZM5 9.022V4a1 1 0 0 0-1 1v4.207a5.48 5.48 0 0 1 1-.185ZM9.743 18c.253-.307.474-.642.657-1H15a1 1 0 0 1-1 1H9.743ZM1 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm2.404 2.803l4.9-4.9a3.5 3.5 0 0 1-4.9 4.9Zm-.707-.707a3.5 3.5 0 0 1 4.9-4.9l-4.9 4.9Z"
      />
    </svg>
  );
}
export default DocumentMultipleProhibited;
