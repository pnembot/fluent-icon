import type { SVGProps } from "react";

export function TextHanging(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.5 4a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13Zm-4 10a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1h9Zm.5-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5Zm2.146 2.146l1.5-1.5a.5.5 0 0 1 .708.708L16.207 12l1.147 1.146a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708Z"
      />
    </svg>
  );
}
export default TextHanging;
