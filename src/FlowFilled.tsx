import type { SVGProps } from "react";

export function FlowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15 4a3 3 0 0 0-2.96 2.505a2.5 2.5 0 0 0-2.312 2.084l-.443 2.658a1.5 1.5 0 0 1-1.328 1.245a3 3 0 1 0 .002 1.003a2.5 2.5 0 0 0 2.313-2.084l.443-2.658a1.5 1.5 0 0 1 1.328-1.245A3 3 0 1 0 15 4Z"
      />
    </svg>
  );
}
export default FlowFilled;
