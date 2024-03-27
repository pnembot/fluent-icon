import type { SVGProps } from "react";

export function ArrowWrapOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l.98.98A.75.75 0 0 0 3.75 5h.543l3.5 3.499H6.25a3.25 3.25 0 1 0 0 6.5h8.043l.708.708a.748.748 0 0 0 .79.79l1.355 1.356a.5.5 0 0 0 .708-.708l-15-15ZM12.793 13.5H6.25a1.75 1.75 0 1 1 0-3.5h3.043l3.5 3.5Zm.957-5h-3.129l1.5 1.5h1.629a3.25 3.25 0 0 0 0-6.5H5.621l1.5 1.5h6.629a1.75 1.75 0 1 1 0 3.5Zm3.591 6.72l-2.328-2.328a.75.75 0 0 1 1.267-.672l1.5 1.5a.75.75 0 0 1 0 1.06l-.439.44Z"
      />
    </svg>
  );
}
export default ArrowWrapOffFilled;
