import type { SVGProps } from "react";

export function SlideMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a4 4 0 0 0-4 4v5a2 2 0 0 0 2 2v-1a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3h7a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2H6Zm1 3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H7ZM6 8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8Z"
      />
    </svg>
  );
}
export default SlideMultiple;
