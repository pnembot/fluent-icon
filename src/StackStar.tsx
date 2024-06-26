import type { SVGProps } from "react";

export function StackStar(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 4.75a.5.5 0 0 1 .443.268l.878 1.68l1.738.208a.5.5 0 0 1 .253.887l-1.254 1l.429 1.844a.5.5 0 0 1-.744.542L8 10.137l-1.743 1.042a.5.5 0 0 1-.744-.542l.429-1.845l-1.254-.999a.5.5 0 0 1 .253-.887l1.738-.208l.878-1.68A.5.5 0 0 1 8 4.75ZM2 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4Zm2 11a2 2 0 0 1-1.732-1H12a3 3 0 0 0 3-3V5.268A2 2 0 0 1 16 7v4a4 4 0 0 1-4 4H6Zm2 2a2 2 0 0 1-1.732-1H12a5 5 0 0 0 5-5V7.268A2 2 0 0 1 18 9v2a6 6 0 0 1-6 6H8Z"
      />
    </svg>
  );
}
export default StackStar;
