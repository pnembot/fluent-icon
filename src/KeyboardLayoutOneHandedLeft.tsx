import type { SVGProps } from "react";

export function KeyboardLayoutOneHandedLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 4A1.5 1.5 0 0 0 2 5.5v8A1.5 1.5 0 0 0 3.5 15h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 16.5 4h-13ZM3 5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-8ZM5.5 12a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0-4.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM7.75 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM6 9.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"
      />
    </svg>
  );
}
export default KeyboardLayoutOneHandedLeft;
