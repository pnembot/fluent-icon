import type { SVGProps } from "react";

export function ElevatorFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.5 3H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.5V3ZM5.646 7.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 1 1-.708.708L6.5 8.707V11.5a.5.5 0 0 1-1 0V8.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5ZM10.5 16H15a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-4.5v13Zm3.854-4.146a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708l.646.647V7.5a.5.5 0 0 1 1 0v2.793l.646-.647a.5.5 0 0 1 .708.708l-1.5 1.5Z"
      />
    </svg>
  );
}
export default ElevatorFilled;
