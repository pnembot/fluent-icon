import type { SVGProps } from "react";

export function BoardSplit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm1 4v4a2 2 0 0 0 2 2h5v-6H4Zm7-1V4H6a2 2 0 0 0-2 2v3h7Zm1 7h2a2 2 0 0 0 2-2v-1h-4v3Zm4-9V6a2 2 0 0 0-2-2h-2v3h4Zm0 1h-4v4h4V8Z"
      />
    </svg>
  );
}
export default BoardSplit;
