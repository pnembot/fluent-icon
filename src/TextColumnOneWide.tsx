import type { SVGProps } from "react";

export function TextColumnOneWide(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM3 11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z"
      />
    </svg>
  );
}
export default TextColumnOneWide;
