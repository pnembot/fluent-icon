import type { SVGProps } from "react";

export function TextAlignJustifyRotate270Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.25 18a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v14.5a.75.75 0 0 1-.75.75Zm5 0a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v14.5a.75.75 0 0 1-.75.75Zm4.25-.75a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-1.5 0v14.5Z"
      />
    </svg>
  );
}
export default TextAlignJustifyRotate270Filled;
