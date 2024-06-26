import type { SVGProps } from "react";

export function PeopleMoneyFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.75 9a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5ZM9 12.5a2.5 2.5 0 0 1 1.707-2.371A1.994 1.994 0 0 0 10 10H3.5a2 2 0 0 0-2 2s0 4 5.25 4c.897 0 1.64-.117 2.257-.31A2.534 2.534 0 0 1 9 15.5v-3Zm8-6a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-7 6a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3Zm1 0v1a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5Zm7 1v-1a.5.5 0 0 1-.5-.5h-1a1.5 1.5 0 0 0 1.5 1.5ZM16.5 16h1a.5.5 0 0 1 .5-.5v-1a1.5 1.5 0 0 0-1.5 1.5ZM11 14.5v1a.5.5 0 0 1 .5.5h1a1.5 1.5 0 0 0-1.5-1.5Zm3.5 1a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"
      />
    </svg>
  );
}
export default PeopleMoneyFilled;
