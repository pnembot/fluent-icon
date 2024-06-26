import type { SVGProps } from "react";

export function TextAddSpaceAfter(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm5.146 5.146a.5.5 0 0 0 .708.708L10 14.207l1.146 1.147a.5.5 0 0 0 .708-.708l-1.5-1.5a.5.5 0 0 0-.708 0l-1.5 1.5Z"
      />
    </svg>
  );
}
export default TextAddSpaceAfter;
