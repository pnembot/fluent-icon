import type { SVGProps } from "react";

export function BoardSplitFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v3h8V3H6Zm5 7H3v4a3 3 0 0 0 3 3h5v-7Zm3 7h-2v-4h5v1a3 3 0 0 1-3 3Zm3-5h-5V8h5v4Zm0-5h-5V3h2a3 3 0 0 1 3 3v1Z"
      />
    </svg>
  );
}
export default BoardSplitFilled;
