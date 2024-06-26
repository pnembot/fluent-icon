import type { SVGProps } from "react";

export function DocumentProhibitedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H9.743A5.5 5.5 0 0 0 4 9.207V3.5A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25Zm-8.682 9.068a4.5 4.5 0 1 0 6.364 6.364a4.5 4.5 0 0 0-6.364-6.364Zm5.657 5.657a3.5 3.5 0 0 1-4.571.328l4.9-4.9a3.5 3.5 0 0 1-.33 4.572Zm-.379-5.278l-4.9 4.9a3.5 3.5 0 0 1 4.9-4.9Z"
      />
    </svg>
  );
}
export default DocumentProhibitedFilled;
