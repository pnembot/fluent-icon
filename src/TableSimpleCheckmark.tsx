import type { SVGProps } from "react";

export function TableSimpleCheckmark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6a2 2 0 0 1 2-2h3.5v5.5H4V6Zm6.5 3.5V4H14a2 2 0 0 1 2 2v3.5h-5.5Zm-6.5 1h5.5V16H6a2 2 0 0 1-2-2v-3.5Zm10.856 1.396a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.706 0l-.753-.75a.5.5 0 0 1 .706-.708l.4.397l1.396-1.397a.5.5 0 0 1 .707 0Z"
      />
    </svg>
  );
}
export default TableSimpleCheckmark;
