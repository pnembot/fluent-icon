import type { SVGProps } from "react";

export function ArrowCircleDownUpFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm-1-5.793l-1.646 1.647a.5.5 0 0 1-.708 0L5 12.207a.5.5 0 1 1 .707-.707l.793.793V6.5a.5.5 0 0 1 1 0v5.793l.793-.793a.5.5 0 1 1 .707.707Zm6-4.414a.5.5 0 0 1-.707.707l-.793-.793V13.5a.5.5 0 0 1-1 0V7.707l-.793.793A.5.5 0 1 1 11 7.793l1.646-1.647a.5.5 0 0 1 .707 0L15 7.793Z"
      />
    </svg>
  );
}
export default ArrowCircleDownUpFilled;
