import type { SVGProps } from "react";

export function ArrowEnterFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.75 17.5a.75.75 0 0 1 0-1.5H14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H7.75a.75.75 0 0 1 0-1.5H14A3.5 3.5 0 0 1 17.5 6v8a3.5 3.5 0 0 1-3.5 3.5H7.75ZM7.741 6.199a.75.75 0 0 1 1.06.042l3 3.25a.75.75 0 0 1 0 1.018l-3 3.25A.75.75 0 1 1 7.7 12.74l1.838-1.991H1.75a.75.75 0 0 1 0-1.5h7.787l-1.838-1.99a.75.75 0 0 1 .042-1.06Z"
      />
    </svg>
  );
}
export default ArrowEnterFilled;
