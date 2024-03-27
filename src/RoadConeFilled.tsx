import type { SVGProps } from "react";

export function RoadConeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.422 2.764A1 1 0 0 1 9.394 2h1.222a1 1 0 0 1 .966.742L15.384 17H17.5a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h2.114c.253-.969.523-1.974.803-3H11.5a.5.5 0 0 0 0-1H5.69l.448-1.63l.102-.37h4.26a.5.5 0 0 0 0-1H6.515c.68-2.478 1.352-4.959 1.907-7.236Z"
      />
    </svg>
  );
}
export default RoadConeFilled;
