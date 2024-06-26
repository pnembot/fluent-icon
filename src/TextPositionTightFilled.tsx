import type { SVGProps } from "react";

export function TextPositionTightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 2.75a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Zm0 12a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Zm6.5-8.5A2.25 2.25 0 0 0 7.75 8.5v5a.75.75 0 0 1-1.5 0v-5a3.75 3.75 0 1 1 7.5 0v5a.75.75 0 0 1-1.5 0v-5A2.25 2.25 0 0 0 10 6.25Zm-6.5 5.5h1.75v1.5H3.5a.75.75 0 0 1 0-1.5Zm13 1.5h-1.75v-1.5h1.75a.75.75 0 0 1 0 1.5Zm-1.75-4.5v1.5h1.75a.75.75 0 0 0 0-1.5h-1.75Zm-8.623-3a4.73 4.73 0 0 0-.71 1.5H3.5a.75.75 0 0 1 0-1.5h2.627ZM16.5 7.25h-1.916a4.728 4.728 0 0 0-.71-1.5H16.5a.75.75 0 0 1 0 1.5ZM5.25 8.75v1.5H3.5a.75.75 0 0 1 0-1.5h1.75Z"
      />
    </svg>
  );
}
export default TextPositionTightFilled;
