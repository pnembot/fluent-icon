import type { SVGProps } from "react";

export function Cube(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.703 6.042a.5.5 0 1 0-.406.914L9.5 8.824V13.5a.5.5 0 0 0 1 0V8.824l4.203-1.868a.5.5 0 1 0-.406-.914L10 7.952l-4.297-1.91ZM11.3 2.481a3.5 3.5 0 0 0-2.6 0L2.943 4.784A1.5 1.5 0 0 0 2 6.176v7.646a1.5 1.5 0 0 0 .943 1.393L8.7 17.518a3.5 3.5 0 0 0 2.6 0l5.757-2.303A1.5 1.5 0 0 0 18 13.822V6.176a1.5 1.5 0 0 0-.943-1.392L11.3 2.48Zm-2.228.928a2.5 2.5 0 0 1 1.857 0l5.757 2.303a.5.5 0 0 1 .314.464v7.646a.5.5 0 0 1-.314.465l-5.758 2.303a2.5 2.5 0 0 1-1.856 0l-5.758-2.303A.5.5 0 0 1 3 13.822V6.176a.5.5 0 0 1 .314-.464L9.072 3.41Z"
      />
    </svg>
  );
}
export default Cube;
