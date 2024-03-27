import type { SVGProps } from "react";

export function ArrowTrendingWrench(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.5 3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.707l-4.647 4.647a.5.5 0 0 1-.707 0L9 7.707l-5.146 5.147a.5.5 0 0 1-.708-.708l5.5-5.5a.5.5 0 0 1 .708 0L11 8.293L15.293 4H12.5a.5.5 0 0 1 0-1h4Zm-.398 6.712c.26-.26.155-.696-.21-.739a3.5 3.5 0 0 0-3.704 4.652L9.475 16.34a1.5 1.5 0 0 0 2.121 2.121l2.713-2.713a3.5 3.5 0 0 0 4.653-3.704c-.043-.365-.479-.47-.739-.21l-.97.97a1.5 1.5 0 1 1-2.121-2.121l.97-.97Z"
      />
    </svg>
  );
}
export default ArrowTrendingWrench;
