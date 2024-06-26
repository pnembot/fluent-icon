import type { SVGProps } from "react";

export function KeyCommand(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 4A1.5 1.5 0 0 1 7 5.5V7H5.5a1.5 1.5 0 1 1 0-3ZM8 7V5.5A2.5 2.5 0 1 0 5.5 8H7v4H5.5A2.5 2.5 0 1 0 8 14.5V13h4v1.5a2.5 2.5 0 1 0 2.5-2.5H13V8h1.5A2.5 2.5 0 1 0 12 5.5V7H8Zm0 1h4v4H8V8Zm5-1V5.5A1.5 1.5 0 1 1 14.5 7H13Zm0 6h1.5a1.5 1.5 0 1 1-1.5 1.5V13Zm-6 0v1.5A1.5 1.5 0 1 1 5.5 13H7Z"
      />
    </svg>
  );
}
export default KeyCommand;
