import type { SVGProps } from "react";

export function DoubleTapSwipeUpFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.53 2.22a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v7.69a.75.75 0 0 0 1.5 0V4.56l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5ZM4.25 12.5a5.753 5.753 0 0 1 4-5.479v1.605a4.25 4.25 0 1 0 3.5 0V7.021c2.32.74 4 2.914 4 5.48a5.75 5.75 0 0 1-11.5 0Zm2.5 0c0-1.15.598-2.162 1.5-2.739v2.74a1.75 1.75 0 1 0 3.5 0V9.76a3.25 3.25 0 1 1-5 2.74Z"
      />
    </svg>
  );
}
export default DoubleTapSwipeUpFilled;
