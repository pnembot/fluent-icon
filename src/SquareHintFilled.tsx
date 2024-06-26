import type { SVGProps } from "react";

export function SquareHintFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.25 3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM3 10.75a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0v1.5Zm5.5 5.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm7-5.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0v1.5Zm-9.5-7A.75.75 0 0 0 5.25 3A2.25 2.25 0 0 0 3 5.25a.75.75 0 0 0 1.5 0a.75.75 0 0 1 .75-.75a.75.75 0 0 0 .75-.75ZM5.25 17a.75.75 0 0 0 0-1.5a.75.75 0 0 1-.75-.75a.75.75 0 0 0-1.5 0A2.25 2.25 0 0 0 5.25 17ZM14 3.75a.75.75 0 0 1 .75-.75A2.25 2.25 0 0 1 17 5.25a.75.75 0 0 1-1.5 0a.75.75 0 0 0-.75-.75a.75.75 0 0 1-.75-.75ZM14.75 17a.75.75 0 0 1 0-1.5a.75.75 0 0 0 .75-.75a.75.75 0 0 1 1.5 0A2.25 2.25 0 0 1 14.75 17Z"
      />
    </svg>
  );
}
export default SquareHintFilled;
