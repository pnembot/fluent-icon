import type { SVGProps } from "react";

export function StackArrowForward(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Zm1.604-7.104a.5.5 0 0 0-.708.708l.897.896H14.75A2.75 2.75 0 0 0 12 7.25v.25a.5.5 0 0 0 1 0v-.25c0-.966.784-1.75 1.75-1.75h1.543l-.897.896a.5.5 0 0 0 .708.708l1.752-1.753a.5.5 0 0 0-.002-.705l-1.75-1.75ZM14 11v-.022a5.489 5.489 0 0 1-1-.185V11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5.207c.099-.349.23-.683.393-1H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Zm1-.022a5.489 5.489 0 0 0 1-.185V11a4 4 0 0 1-4 4H6a2 2 0 0 1-1.732-1H12a3 3 0 0 0 3-3v-.022Zm3-1.235a5.507 5.507 0 0 1-1 .657v.6a5 5 0 0 1-5 5H6.268A2 2 0 0 0 8 17h4a6 6 0 0 0 6-6V9.743Z"
      />
    </svg>
  );
}
export default StackArrowForward;
