import type { SVGProps } from "react";

export function CubeAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.072 16.59c.127.05.258.09.39.12c.166.376.372.73.614 1.057a3.498 3.498 0 0 1-1.376-.25l-5.757-2.302A1.5 1.5 0 0 1 2 13.822V6.176a1.5 1.5 0 0 1 .943-1.392L8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.757 2.303c.57.227.943.779.943 1.392v4.08a5.508 5.508 0 0 0-1-.657V6.176a.5.5 0 0 0-.314-.464L10.928 3.41a2.5 2.5 0 0 0-1.856 0L3.314 5.712A.5.5 0 0 0 3 6.176v7.646a.5.5 0 0 0 .314.465l5.758 2.303ZM5.703 6.042a.5.5 0 1 0-.406.914L9.5 8.824v3.381a5.51 5.51 0 0 1 1-1.48v-1.9l4.203-1.869a.5.5 0 1 0-.406-.914L10 7.952l-4.297-1.91ZM17 18.241a4.5 4.5 0 1 1-5-7.484a4.5 4.5 0 0 1 5 7.484Zm-2.146-6.095a.5.5 0 0 0-.854.353v1.5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0v-1.5h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.146-.354Z"
      />
    </svg>
  );
}
export default CubeAdd;
