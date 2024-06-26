import type { SVGProps } from "react";

export function TextPositionThroughFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 2.75a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13ZM7.75 8.5a2.25 2.25 0 0 1 4.5 0v5a.75.75 0 0 0 1.5 0v-5a3.75 3.75 0 1 0-7.5 0v5a.75.75 0 0 0 1.5 0v-5Zm-5 7a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75Zm13.75-3.75h-1.75v1.5h1.75a.75.75 0 0 0 0-1.5Zm-13 0h1.75v1.5H3.5a.75.75 0 0 1 0-1.5Zm5.25-3h2.5v1.5h-2.5v-1.5Zm0 3h2.5v1.5h-2.5v-1.5Zm-3.5-3v1.5H3.5a.75.75 0 0 1 0-1.5h1.75Zm11.25 0h-1.75v1.5h1.75a.75.75 0 0 0 0-1.5Zm-2.627-3c.32.448.563.955.71 1.5H16.5a.75.75 0 0 0 0-1.5h-2.627Zm-7.746 0a4.73 4.73 0 0 0-.71 1.5H3.5a.75.75 0 0 1 0-1.5h2.627Z"
      />
    </svg>
  );
}
export default TextPositionThroughFilled;
