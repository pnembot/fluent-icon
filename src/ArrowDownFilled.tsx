import type { SVGProps } from "react";

export function ArrowDownFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.792 11.265a.75.75 0 0 0-1.09-1.03l-4.955 5.239V2.75a.75.75 0 0 0-1.5 0v12.726L4.29 10.235a.75.75 0 0 0-1.09 1.03l6.07 6.418a.995.995 0 0 0 .566.3a.753.753 0 0 0 .329-.002a.995.995 0 0 0 .558-.298l6.07-6.418Z"
      />
    </svg>
  );
}
export default ArrowDownFilled;
