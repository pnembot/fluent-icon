import type { SVGProps } from "react";

export function DocumentCopyFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 6.5V2H7.5A1.5 1.5 0 0 0 6 3.5v11A1.5 1.5 0 0 0 7.5 16h8a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 11 6.5Zm1 0V2.25L16.75 7H12.5a.5.5 0 0 1-.5-.5ZM4 5a1 1 0 0 1 1-1v10.5A2.5 2.5 0 0 0 7.5 17H15a1 1 0 0 1-1 1H7.548A3.548 3.548 0 0 1 4 14.452V5Z"
      />
    </svg>
  );
}
export default DocumentCopyFilled;
