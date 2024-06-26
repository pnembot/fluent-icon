import type { SVGProps } from "react";

export function BookContactsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm5.5 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0ZM7 10.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75V11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-.25Z"
      />
    </svg>
  );
}
export default BookContactsFilled;
