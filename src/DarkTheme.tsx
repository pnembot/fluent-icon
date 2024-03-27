import type { SVGProps } from "react";

export function DarkTheme(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 3a7 7 0 1 1 0 14V3Zm0-1a8 8 0 1 0 0 16a8 8 0 0 0 0-16Z"
      />
    </svg>
  );
}
export default DarkTheme;
