import type { SVGProps } from "react";

export function TextT(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 3.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V4h-4v12h1.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1H9V4H5v1.5a.5.5 0 0 1-1 0v-2Z"
      />
    </svg>
  );
}
export default TextT;
