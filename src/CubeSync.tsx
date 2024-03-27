import type { SVGProps } from "react";

export function CubeSync(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.703 6.042a.5.5 0 1 0-.406.914L9.5 8.824v3.382a5.51 5.51 0 0 1 1-1.481v-1.9l4.203-1.869a.5.5 0 1 0-.406-.914L10 7.952l-4.297-1.91ZM9.072 16.59c.127.052.258.092.39.12c.166.377.372.732.614 1.058a3.5 3.5 0 0 1-1.376-.25l-5.757-2.302A1.5 1.5 0 0 1 2 13.822V6.176a1.5 1.5 0 0 1 .943-1.392L8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.757 2.303c.57.227.943.779.943 1.392v4.08a5.503 5.503 0 0 0-1-.657V6.176a.5.5 0 0 0-.314-.464L10.928 3.41a2.5 2.5 0 0 0-1.856 0L3.314 5.712A.5.5 0 0 0 3 6.176v7.646a.5.5 0 0 0 .314.465l5.758 2.303ZM10 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 1 1 0-1h.468a2.006 2.006 0 0 0-1.717-.104a2 2 0 0 0-.665.44a.5.5 0 1 1-.707-.707A3.001 3.001 0 0 1 16 12.152V12a.5.5 0 0 1 .5-.5Zm-.876 5.532A3 3 0 0 1 13 16.848V17a.5.5 0 1 1-1 0v-1.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-.468a2 2 0 0 0 2.383-.336a.5.5 0 0 1 .706.707a3 3 0 0 1-.997.66Z"
      />
    </svg>
  );
}
export default CubeSync;
