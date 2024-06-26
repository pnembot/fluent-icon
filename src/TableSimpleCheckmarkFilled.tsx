import type { SVGProps } from "react";

export function TableSimpleCheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 17h-3.5v-6.5H17V14a3 3 0 0 1-3 3Zm3-7.5h-6.5V3H14a3 3 0 0 1 3 3v3.5Zm-7.5 0V3H6a3 3 0 0 0-3 3v3.5h6.5Zm0 7.5v-6.5H3V14a3 3 0 0 0 3 3h3.5Zm5.852-3.896a.5.5 0 0 0-.707-.708l-1.397 1.397l-.399-.397a.5.5 0 0 0-.706.708l.753.75a.5.5 0 0 0 .706 0l1.75-1.75Z"
      />
    </svg>
  );
}
export default TableSimpleCheckmarkFilled;
