import type { SVGProps } from "react";

export function StarThreeQuarterFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m12 5.133l-1.102-2.234a1 1 0 0 0-1.794 0l-1.93 3.912l-4.317.627a1 1 0 0 0-.554 1.706l3.124 3.044l-.738 4.3a1 1 0 0 0 1.451 1.054l3.861-2.03L12 16.562V5.133Z"
      />
    </svg>
  );
}
export default StarThreeQuarterFilled;
