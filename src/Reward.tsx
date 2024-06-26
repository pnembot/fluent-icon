import type { SVGProps } from "react";

export function Reward(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.528 3.001a1.5 1.5 0 0 1 1.5 1.5v1.396a2.5 2.5 0 0 1-1.363 2.226l-4.188 2.14a3.54 3.54 0 1 1-2.924 0l-4.189-2.14a2.5 2.5 0 0 1-1.356-2.04l-.007-.186V4.5a1.5 1.5 0 0 1 1.5-1.5h11.027Zm-5.513 7.947a2.54 2.54 0 1 0 0 5.08a2.54 2.54 0 0 0 0-5.08Zm2.538-6.947H7.474v4.588l2.313 1.182a.5.5 0 0 0 .455 0l2.311-1.182V4.001Zm-6.079 0H4.501a.5.5 0 0 0-.5.5v1.396l.007.14a1.5 1.5 0 0 0 .811 1.195l1.655.846V4.001Zm9.054 0h-1.975v4.077l1.657-.846a1.5 1.5 0 0 0 .818-1.335V4.5a.5.5 0 0 0-.5-.5Z"
      />
    </svg>
  );
}
export default Reward;
