import type { SVGProps } from "react";

export function Backspace(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.146 7.146a.5.5 0 0 1 .708 0L12 9.293l2.146-2.147a.5.5 0 0 1 .708.708L12.707 10l2.147 2.146a.5.5 0 0 1-.708.708L12 10.707l-2.146 2.147a.5.5 0 0 1-.708-.707L11.293 10L9.146 7.854a.5.5 0 0 1 0-.708Zm-2.56-2.482A2.5 2.5 0 0 1 8.283 4H15.5A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5H8.283a2.5 2.5 0 0 1-1.697-.664l-3.787-3.5a2.5 2.5 0 0 1 0-3.672l3.787-3.5ZM8.283 5a1.5 1.5 0 0 0-1.018.399l-3.787 3.5a1.5 1.5 0 0 0 0 2.203l3.787 3.5A1.5 1.5 0 0 0 8.283 15H15.5a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 15.5 5H8.283Z"
      />
    </svg>
  );
}
export default Backspace;
