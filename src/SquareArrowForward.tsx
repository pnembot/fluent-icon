import type { SVGProps } from "react";

export function SquareArrowForward(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6a5.465 5.465 0 0 0-1-.393V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.207c.099.349.23.683.393 1H6a3 3 0 0 1-3-3V6Zm11.5 13a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Zm.896-6.396l.897.896H14.75A2.75 2.75 0 0 0 12 16.25v.25a.5.5 0 0 0 1 0v-.25c0-.966.784-1.75 1.75-1.75h1.543l-.897.896a.5.5 0 0 0 .708.708l1.752-1.753a.499.499 0 0 0-.002-.705l-1.75-1.75a.5.5 0 0 0-.708.708Z"
      />
    </svg>
  );
}
export default SquareArrowForward;
