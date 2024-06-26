import type { SVGProps } from "react";

export function TimePicker(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.32 2.116a.5.5 0 0 0-.64 0l-3 2.5a.5.5 0 1 0 .64.768L10 3.151l2.68 2.233a.5.5 0 0 0 .64-.768l-3-2.5Zm3 13.268l-3 2.5a.5.5 0 0 1-.64 0l-3-2.5a.5.5 0 1 1 .64-.768L10 16.849l2.68-2.233a.5.5 0 0 1 .64.768ZM10.75 8.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM10 12a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm6-2.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0v-1Zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5Zm-11-1A1.5 1.5 0 0 0 5 9.5v1a1.5 1.5 0 0 0 3 0v-1A1.5 1.5 0 0 0 6.5 8ZM6 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm6 0a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0v-1Zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5Zm-11-1A1.5 1.5 0 0 0 1 9.5v1a1.5 1.5 0 0 0 3 0v-1A1.5 1.5 0 0 0 2.5 8ZM2 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Z"
      />
    </svg>
  );
}
export default TimePicker;
