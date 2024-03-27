import type { SVGProps } from "react";

export function HomeCheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.998 2.384a1.5 1.5 0 0 1 2.005 0l5.5 4.943A1.5 1.5 0 0 1 17 8.443V15.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 15.5V8.443c0-.425.18-.831.498-1.116l5.5-4.943Zm4.356 6.467a.5.5 0 0 0-.708-.707L9 11.79l-1.646-1.647a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4Z"
      />
    </svg>
  );
}
export default HomeCheckmarkFilled;
