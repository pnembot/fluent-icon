import type { SVGProps } from "react";

export function TextPositionFront(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm3 8h1v2.5a.5.5 0 0 1-1 0V11Zm7 0h-1v2.5a.5.5 0 0 0 1 0V11Zm3-2a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13ZM10 5a3.5 3.5 0 0 1 3.465 3H12.45a2.5 2.5 0 0 0-4.9 0H6.535A3.5 3.5 0 0 1 10 5ZM3.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z"
      />
    </svg>
  );
}
export default TextPositionFront;
