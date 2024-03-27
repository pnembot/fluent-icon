import type { SVGProps } from "react";

export function TextColumnOneSemiNarrow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM6 11.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z"
      />
    </svg>
  );
}
export default TextColumnOneSemiNarrow;
