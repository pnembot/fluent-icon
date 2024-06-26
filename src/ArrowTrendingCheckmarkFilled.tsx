import type { SVGProps } from "react";

export function ArrowTrendingCheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.75 3a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.8l-4.494 4.104a.75.75 0 0 1-1.037-.024L9 8.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06l5.25-5.25a.75.75 0 0 1 1.06 0l1.493 1.493L14.816 4.5H12.25a.75.75 0 1 1 0-1.5h4.5ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-1.62-1.825a.5.5 0 0 0-.705-.055l-3.149 2.699l-1.172-1.173a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .68.026l3.5-3a.5.5 0 0 0 .054-.705Z"
      />
    </svg>
  );
}
export default ArrowTrendingCheckmarkFilled;
