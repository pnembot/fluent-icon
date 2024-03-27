import type { SVGProps } from "react";

export function Screenshot(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 5A1.5 1.5 0 0 0 5 6.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 0-1h-2Zm5 0a.5.5 0 0 0 0 1h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 13.5 5h-2ZM6 11.5a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 15h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 1-.5-.5v-2Zm9 0a.5.5 0 0 0-1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2a1.5 1.5 0 0 0 1.5-1.5v-2ZM3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm1 0v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1Z"
      />
    </svg>
  );
}
export default Screenshot;
