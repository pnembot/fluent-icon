import type { SVGProps } from "react";

export function SquareHint(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3.5a.5.5 0 0 0-.5-.5A2.5 2.5 0 0 0 3 5.5a.5.5 0 0 0 1 0A1.5 1.5 0 0 1 5.5 4a.5.5 0 0 0 .5-.5ZM16.5 6a.5.5 0 0 0 .5-.5A2.5 2.5 0 0 0 14.5 3a.5.5 0 0 0 0 1A1.5 1.5 0 0 1 16 5.5a.5.5 0 0 0 .5.5Zm-2 11a.5.5 0 0 1 0-1a1.5 1.5 0 0 0 1.5-1.5a.5.5 0 0 1 1 0a2.5 2.5 0 0 1-2.5 2.5Zm-11-3a.5.5 0 0 0-.5.5A2.5 2.5 0 0 0 5.5 17a.5.5 0 0 0 0-1A1.5 1.5 0 0 1 4 14.5a.5.5 0 0 0-.5-.5ZM3 9a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V9Zm13.5-.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V9a.5.5 0 0 0-.5-.5Zm-8-5A.5.5 0 0 1 9 3h2a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5ZM9 16a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9Z"
      />
    </svg>
  );
}
export default SquareHint;
