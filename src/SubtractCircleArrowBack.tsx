import type { SVGProps } from "react";

export function SubtractCircleArrowBack(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 8.5a.5.5 0 0 0 0 1h6.706c.238-.11.486-.203.742-.278A.5.5 0 0 0 12.5 8.5h-7Zm10.497.706a7 7 0 1 0-6.79 6.79c.096.343.224.671.382.983a8 8 0 1 1 7.39-7.39a5.464 5.464 0 0 0-.982-.383ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-5.396-2.604a.5.5 0 0 0-.708 0l-1.75 1.75a.5.5 0 0 0-.002.705l1.752 1.753a.5.5 0 0 0 .708-.708l-.897-.896h1.543c.966 0 1.75.784 1.75 1.75v.25a.5.5 0 0 0 1 0v-.25a2.75 2.75 0 0 0-2.75-2.75h-1.543l.897-.896a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default SubtractCircleArrowBack;
