import type { SVGProps } from "react";

export function CubeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.757 2.304c.57.227.943.779.943 1.392v7.646a1.5 1.5 0 0 1-.943 1.393L11.3 17.518a3.5 3.5 0 0 1-2.6 0l-5.757-2.303A1.5 1.5 0 0 1 2 13.822V6.176a1.5 1.5 0 0 1 .943-1.392L8.7 2.48ZM5.703 6.043a.5.5 0 1 0-.406.914L9.5 8.824V13.5a.5.5 0 0 0 1 0V8.824l4.203-1.868a.5.5 0 1 0-.406-.914L10 7.952l-4.297-1.91Z"
      />
    </svg>
  );
}
export default CubeFilled;
