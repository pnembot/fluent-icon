import type { SVGProps } from "react";

export function DocumentDismissFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H9.743A5.5 5.5 0 0 0 4 9.207V3.5A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM2.318 17.682a4.5 4.5 0 1 0 6.364-6.364a4.5 4.5 0 0 0-6.364 6.364Zm1.414-4.95a.5.5 0 0 1 .707 0l1.06 1.06l1.062-1.06a.5.5 0 1 1 .707.707L6.207 14.5l1.06 1.06a.5.5 0 1 1-.707.708l-1.06-1.06l-1.06 1.06a.5.5 0 1 1-.708-.708l1.06-1.06l-1.06-1.06a.5.5 0 0 1 0-.708Z"
      />
    </svg>
  );
}
export default DocumentDismissFilled;
