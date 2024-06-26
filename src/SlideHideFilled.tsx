import type { SVGProps } from "react";

export function SlideHideFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a4 4 0 0 0-4 4v5a2 2 0 0 0 2 2V8a3 3 0 0 1 3-3h8a2 2 0 0 0-2-2H6Zm0 5a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H7a2 2 0 0 0-2 2v.5a.5.5 0 0 0 1 0V8Zm3.5-2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm3 0a.5.5 0 0 0 0 1h.5a1 1 0 0 1 1 1v.5a.5.5 0 0 0 1 0V8a2 2 0 0 0-2-2h-.5ZM6 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm12 0a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm-12 4a.5.5 0 0 0-1 0v.5a2 2 0 0 0 2 2h.5a.5.5 0 0 0 0-1H7a1 1 0 0 1-1-1v-.5Zm12 0a.5.5 0 0 0-1 0v.5a1 1 0 0 1-1 1h-.5a.5.5 0 0 0 0 1h.5a2 2 0 0 0 2-2v-.5ZM9.5 16a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"
      />
    </svg>
  );
}
export default SlideHideFilled;
