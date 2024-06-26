import type { SVGProps } from "react";

export function ReadingListFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 5.497a1.002 1.002 0 0 1 1.837-.555a.75.75 0 0 0 1.248-.832A2.502 2.502 0 1 0 4.597 8h10.677a.75.75 0 0 0 0-1.5H4.597a.76.76 0 0 0-.048.001a.76.76 0 0 0-.047-.001A1.002 1.002 0 0 1 3.5 5.497ZM9.748 4a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5ZM5.75 9a.75.75 0 0 0 0 1.5h11.5a.75.75 0 1 0 0-1.5H5.75ZM2 12.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM5.75 14a.75.75 0 0 0 0 1.5h11.498a.75.75 0 1 0 0-1.5H5.75Z"
      />
    </svg>
  );
}
export default ReadingListFilled;
