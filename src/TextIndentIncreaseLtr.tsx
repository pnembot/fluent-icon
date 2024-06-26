import type { SVGProps } from "react";

export function TextIndentIncreaseLtr(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM2.854 7.732a.5.5 0 1 0-.708.707L3.207 9.5l-1.06 1.06a.5.5 0 1 0 .707.708l1.414-1.414a.5.5 0 0 0 0-.708L2.854 7.732Z"
      />
    </svg>
  );
}
export default TextIndentIncreaseLtr;
