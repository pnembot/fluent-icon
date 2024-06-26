import type { SVGProps } from "react";

export function DocumentMultipleProhibitedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 2v4.5A1.5 1.5 0 0 0 12.5 8H17v6.5a1.5 1.5 0 0 1-1.5 1.5h-4.707A5.5 5.5 0 0 0 6 9.022V3.5A1.5 1.5 0 0 1 7.5 2H11ZM5 9.022V4a1 1 0 0 0-1 1v4.207a5.48 5.48 0 0 1 1-.185ZM10.4 17a5.507 5.507 0 0 1-.657 1H14a1 1 0 0 0 1-1h-4.6ZM12 2.25V6.5a.5.5 0 0 0 .5.5h4.25L12 2.25ZM1 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm2.404 2.803l4.9-4.9a3.5 3.5 0 0 1-4.9 4.9Zm-.707-.707a3.5 3.5 0 0 1 4.9-4.9l-4.9 4.9Z"
      />
    </svg>
  );
}
export default DocumentMultipleProhibitedFilled;
