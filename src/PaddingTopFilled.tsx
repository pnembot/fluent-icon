import type { SVGProps } from "react";

export function PaddingTopFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.75 2.75A.75.75 0 0 1 4.5 2h1.313a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm3.938 0a.75.75 0 0 1 .75-.75h2.624a.75.75 0 0 1 0 1.5H8.438a.75.75 0 0 1-.75-.75Zm5.25 0a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.313a.75.75 0 0 1-.75-.75ZM3.75 17.25a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm6.53-12.53a.75.75 0 0 0-1.06 0L4.97 8.97a.75.75 0 1 0 1.06 1.06L9 7.06v7.19a.75.75 0 0 0 1.5 0V7.06l2.97 2.97a.75.75 0 1 0 1.06-1.06l-4.25-4.25Z"
      />
    </svg>
  );
}
export default PaddingTopFilled;
