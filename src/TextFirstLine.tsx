import type { SVGProps } from "react";

export function TextFirstLine(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.646 3.146a.5.5 0 0 1 .708.708L16.207 5l1.147 1.146a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5ZM12.5 4a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1h10Zm5 10a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15Zm.5-4.5a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 .5-.5Z"
      />
    </svg>
  );
}
export default TextFirstLine;
