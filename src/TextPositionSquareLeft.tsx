import type { SVGProps } from "react";

export function TextPositionSquareLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM12 6a.5.5 0 0 0 0 1h4.5a.5.5 0 0 0 0-1H12Zm-.5 3.5A.5.5 0 0 1 12 9h4.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM12 12a.5.5 0 0 0 0 1h4.5a.5.5 0 0 0 0-1H12Zm-9 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm1-7a2.5 2.5 0 0 1 5 0v5a.5.5 0 0 0 1 0v-5a3.5 3.5 0 1 0-7 0v5a.5.5 0 0 0 1 0v-5Z"
      />
    </svg>
  );
}
export default TextPositionSquareLeft;
