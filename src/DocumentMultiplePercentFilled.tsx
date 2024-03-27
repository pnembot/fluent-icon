import type { SVGProps } from "react";

export function DocumentMultiplePercentFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v5.67a3.002 3.002 0 0 1 1.998 2.711l1.441-1.442a1.5 1.5 0 0 1 2.122 2.122l-1.442 1.441A3.002 3.002 0 0 1 10.829 16H13.5a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 9 6.5ZM5 12a2 2 0 1 1-4 0a2 2 0 1 1 4 0Zm-1 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-1.146 5.854a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708.708l-6 6ZM13.06 18h-2.232c.11-.313.171-.65.171-1h2a3 3 0 0 0 3-3V8a1 1 0 0 1 1 1v5.06A3.94 3.94 0 0 1 13.06 18ZM8 15a2 2 0 1 1 .002 3.998A2 2 0 0 1 8 15Zm-1 2a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm3-10.5V2.25L14.75 7H10.5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default DocumentMultiplePercentFilled;
