import type { SVGProps } from "react";

export function ArrowStepOut(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm2-4a.5.5 0 0 0 .5-.5V3.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L9.5 3.707V11.5a.5.5 0 0 0 .5.5Z"
      />
    </svg>
  );
}
export default ArrowStepOut;
