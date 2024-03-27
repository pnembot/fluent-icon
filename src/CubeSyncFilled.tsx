import type { SVGProps } from "react";

export function CubeSyncFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.757 2.304c.57.227.943.779.943 1.392v4.08A5.477 5.477 0 0 0 14.5 9a5.484 5.484 0 0 0-4 1.725v-1.9l4.203-1.869a.5.5 0 1 0-.406-.914L10 7.952l-4.297-1.91a.5.5 0 1 0-.406.914L9.5 8.824v3.382a5.48 5.48 0 0 0-.5 2.293c0 1.224.4 2.355 1.076 3.268a3.5 3.5 0 0 1-1.376-.25l-5.757-2.302A1.5 1.5 0 0 1 2 13.822V6.176a1.5 1.5 0 0 1 .943-1.392L8.7 2.48ZM10 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 1 1 0-1h.468a2.006 2.006 0 0 0-1.717-.105a2 2 0 0 0-.665.44a.5.5 0 1 1-.707-.707A3.001 3.001 0 0 1 16 12.152V12a.5.5 0 0 1 .5-.5Zm-.876 5.531A3 3 0 0 1 13 16.848V17a.5.5 0 1 1-1 0v-1.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-.468a2 2 0 0 0 2.383-.336a.5.5 0 0 1 .706.707a3 3 0 0 1-.997.66Z"
      />
    </svg>
  );
}
export default CubeSyncFilled;
