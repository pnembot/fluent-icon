import type { SVGProps } from "react";

export function AlignCenterHorizontal(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 9.5a.5.5 0 0 1-.5.5H16v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2H9v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4H2.5a.5.5 0 0 1 0-1H4V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v4h2V7a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2h1.5a.5.5 0 0 1 .5.5ZM5 14a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v9Zm7-2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v5Z"
      />
    </svg>
  );
}
export default AlignCenterHorizontal;
