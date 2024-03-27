import type { SVGProps } from "react";

export function StackFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm.268 11A2 2 0 0 0 6 15h6a4 4 0 0 0 4-4V7a2 2 0 0 0-1-1.732V11a3 3 0 0 1-3 3H4.268Zm2 2A2 2 0 0 0 8 17h4a6 6 0 0 0 6-6V9a2 2 0 0 0-1-1.732V11a5 5 0 0 1-5 5H6.268Z"
      />
    </svg>
  );
}
export default StackFilled;
