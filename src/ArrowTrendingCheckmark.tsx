import type { SVGProps } from "react";

export function ArrowTrendingCheckmark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.5 3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.707l-4.647 4.647a.5.5 0 0 1-.707 0L9 7.707l-5.146 5.147a.5.5 0 0 1-.708-.708l5.5-5.5a.5.5 0 0 1 .708 0L11 8.293L15.293 4H12.5a.5.5 0 0 1 0-1h4ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-1.62-1.825a.5.5 0 0 0-.705-.055l-3.149 2.699l-1.172-1.173a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .68.026l3.5-3a.5.5 0 0 0 .054-.705Z"
      />
    </svg>
  );
}
export default ArrowTrendingCheckmark;
