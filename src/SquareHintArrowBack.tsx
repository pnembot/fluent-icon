import type { SVGProps } from "react";

export function SquareHintArrowBack(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3.5a.5.5 0 0 0-.5-.5A2.5 2.5 0 0 0 3 5.5a.5.5 0 0 0 1 0A1.5 1.5 0 0 1 5.5 4a.5.5 0 0 0 .5-.5ZM16.5 6a.5.5 0 0 0 .5-.5A2.5 2.5 0 0 0 14.5 3a.5.5 0 0 0 0 1A1.5 1.5 0 0 1 16 5.5a.5.5 0 0 0 .5.5Zm-13 8a.5.5 0 0 0-.5.5A2.5 2.5 0 0 0 5.5 17a.5.5 0 0 0 0-1A1.5 1.5 0 0 1 4 14.5a.5.5 0 0 0-.5-.5ZM3 9a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V9Zm13.5-1.5a.5.5 0 0 0-.5.5v1.207c.349.099.683.23 1 .393V8a.5.5 0 0 0-.5-.5ZM9.6 17a5.465 5.465 0 0 1-.393-1H8a.5.5 0 0 0 0 1h1.6ZM8.5 3.5A.5.5 0 0 1 9 3h2a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5Zm6 15.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-.896-6.396l-.897.896h1.543A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25a1.75 1.75 0 0 0-1.75-1.75h-1.543l.897.896a.5.5 0 0 1-.708.708l-1.752-1.753a.499.499 0 0 1 .002-.705l1.75-1.75a.5.5 0 0 1 .708.708Z"
      />
    </svg>
  );
}
export default SquareHintArrowBack;
