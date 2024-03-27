import type { SVGProps } from "react";

export function CodeFsRectangle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M5.991 6.402A.5.5 0 0 0 5.5 6h-2a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V9h1a.5.5 0 1 0 0-1H4V7h1.5a.5.5 0 0 0 .491-.598Zm5.863 3.452A.5.5 0 0 0 11.5 9H11V8h.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0V7H9v-.5a.5.5 0 0 0-1 0V7h-.5a.5.5 0 1 0 0 1H8v1h-.5a.5.5 0 1 0 0 1H8v.5a.5.5 0 0 0 1 0V10h1v.5a.5.5 0 0 0 1 0V10h.5a.5.5 0 0 0 .354-.146ZM9 8h1v1H9V8ZM2.75 3A1.75 1.75 0 0 0 1 4.75v7.5c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0 0 14 12.25v-7.5A1.75 1.75 0 0 0 12.25 3h-9.5ZM2 4.75A.75.75 0 0 1 2.75 4h9.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75v-7.5Z"
      />
    </svg>
  );
}
export default CodeFsRectangle;
