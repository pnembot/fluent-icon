import type { SVGProps } from "react";

export function TextExpandFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.75 3.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H4.75ZM4 16.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1-.75-.75Zm7-4a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0-4a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75ZM5.5 14a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7ZM6 8.5V10h1.5a.5.5 0 0 1 0 1H6v1.5a.5.5 0 0 1-1 0V11H3.5a.5.5 0 0 1 0-1H5V8.5a.5.5 0 0 1 1 0Z"
      />
    </svg>
  );
}
export default TextExpandFilled;
