import type { SVGProps } from "react";

export function ArrowBetweenDown(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 2a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 4.5 4h10A1.5 1.5 0 0 0 16 2.5V2a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5V2Zm5.5 3a.5.5 0 0 1 .5.5v7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4.5 4.5a.5.5 0 0 1-.708 0l-4.5-4.5a.5.5 0 0 1 .708-.708L9 13.293V5.5a.5.5 0 0 1 .5-.5ZM3 17.5A1.5 1.5 0 0 1 4.5 16h10a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 0 1-1 0v-.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v.5a.5.5 0 0 1-1 0v-.5Z"
      />
    </svg>
  );
}
export default ArrowBetweenDown;
