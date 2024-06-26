import type { SVGProps } from "react";

export function RatingMature(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.924 7.235A.5.5 0 0 0 7 7.5v5a.5.5 0 1 0 1 0V9.243l1.576 2.522a.5.5 0 0 0 .848 0L12 9.243V12.5a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.924-.265L10 10.557L7.924 7.235ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
      />
    </svg>
  );
}
export default RatingMature;
