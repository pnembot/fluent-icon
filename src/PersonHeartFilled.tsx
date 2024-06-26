import type { SVGProps } from "react";

export function PersonHeartFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm-4.991 9A2.001 2.001 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18c.955 0 1.876-.102 2.72-.313l-1.83-2.002A3.394 3.394 0 0 1 9.987 11h-5.98Zm10.49 1.003l-.628-.493a2.394 2.394 0 0 0-3.244 3.5l3.503 3.83a.5.5 0 0 0 .738 0l3.504-3.83a2.394 2.394 0 0 0-3.244-3.5l-.629.493Z"
      />
    </svg>
  );
}
export default PersonHeartFilled;
