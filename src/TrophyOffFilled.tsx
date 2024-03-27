import type { SVGProps } from "react";

export function TrophyOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L3.594 4.3a1.498 1.498 0 0 0-.598 1.2v1.498a3.006 3.006 0 0 0 2.61 2.974a4.503 4.503 0 0 0 3.895 3.5v1.496H7.504a2 2 0 0 0-2 2v.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-.5a2 2 0 0 0-2-2h-2.003v-1.495a4.47 4.47 0 0 0 1.712-.553l4.933 4.934a.5.5 0 0 0 .708-.708l-15-15ZM5.5 6.208v2.726a2.006 2.006 0 0 1-1.505-1.936V5.5a.5.5 0 0 1 .327-.47L5.5 6.208Zm8.894 3.766a4.476 4.476 0 0 1-.701 1.598L5.576 3.455a2 2 0 0 1 1.925-1.453h5A2 2 0 0 1 14.5 4h.995a1.5 1.5 0 0 1 1.5 1.5v1.505a2.996 2.996 0 0 1-2.601 2.97Zm.106-1.037a1.996 1.996 0 0 0 1.495-1.932V5.5a.5.5 0 0 0-.5-.5H14.5v3.937Z"
      />
    </svg>
  );
}
export default TrophyOffFilled;
