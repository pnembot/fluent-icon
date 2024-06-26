import type { SVGProps } from "react";

export function TextColumnOneNarrow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM7 11.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z"
      />
    </svg>
  );
}
export default TextColumnOneNarrow;
