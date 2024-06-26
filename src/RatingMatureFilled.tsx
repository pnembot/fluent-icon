import type { SVGProps } from "react";

export function RatingMatureFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.924 1.235A.5.5 0 0 0 7 7.5v5a.5.5 0 1 0 1 0V9.243l1.576 2.522a.5.5 0 0 0 .848 0L12 9.243V12.5a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.924-.265L10 10.557L7.924 7.235Z"
      />
    </svg>
  );
}
export default RatingMatureFilled;
