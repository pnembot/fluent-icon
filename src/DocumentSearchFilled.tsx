import type { SVGProps } from "react";

export function DocumentSearchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2h5v4.5A1.5 1.5 0 0 0 11.5 8H16v9a1 1 0 0 1-1 1h-1.087a1.494 1.494 0 0 0-.354-.563l-3.125-3.124A5 5 0 0 0 4 7.416V3a1 1 0 0 1 1-1Zm6 0l5 5h-4.5a.5.5 0 0 1-.5-.5V2Zm-1 10c0 .924-.314 1.775-.84 2.453l3.691 3.692a.5.5 0 1 1-.707.707L8.453 15.16A4 4 0 1 1 10 12Zm-4 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"
      />
    </svg>
  );
}
export default DocumentSearchFilled;
