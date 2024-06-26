import type { SVGProps } from "react";

export function TextIndentDecreaseLtr(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 1 1 0 1h-8a.5.5 0 0 1-.5-.5ZM3.56 7.732a.5.5 0 0 1 .708.707L3.208 9.5l1.06 1.06a.5.5 0 1 1-.707.708L2.146 9.854a.5.5 0 0 1 0-.708l1.415-1.414ZM6.5 9a.5.5 0 0 0 0 1h11a.5.5 0 1 0 0-1h-11ZM6 14.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default TextIndentDecreaseLtr;
