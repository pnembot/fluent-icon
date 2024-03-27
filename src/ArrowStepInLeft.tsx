import type { SVGProps } from "react";

export function ArrowStepInLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 10a1 1 0 1 0-2 0a1 1 0 0 0 2 0ZM4 8a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm14 2a.5.5 0 0 1-.5.5H9.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708.708L9.707 9.5H17.5a.5.5 0 0 1 .5.5Z"
      />
    </svg>
  );
}
export default ArrowStepInLeft;
