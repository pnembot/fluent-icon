import type { SVGProps } from "react";

export function MathSymbolsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.75 5.25v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2ZM11 4.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 11 4.5Zm-8.78 6.78l2.22 2.22l-2.22 2.22a.75.75 0 1 0 1.06 1.06l2.22-2.22l2.22 2.22a.75.75 0 0 0 1.06-1.06L6.56 13.5l2.22-2.22a.75.75 0 1 0-1.06-1.06L5.5 12.44l-2.22-2.22a.75.75 0 1 0-1.06 1.06Zm9.53 1.47a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM15.5 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default MathSymbolsFilled;
