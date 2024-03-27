import type { SVGProps } from "react";

export function TextAlignRightRotate270Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.25 14a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v10.5a.75.75 0 0 1-.75.75Zm5 4a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v14.5a.75.75 0 0 1-.75.75Zm4.25-7.75a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-1.5 0v7.5Z"
      />
    </svg>
  );
}
export default TextAlignRightRotate270Filled;
