import type { SVGProps } from "react";

export function TextDirectionRotate270Ac(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="none">
        <path
          d="M4.146 5.854a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 1 1-.708.708L7 4.707V6.5a.5.5 0 0 1-1 0V4.707L4.854 5.854a.5.5 0 0 1-.708 0zm8 0a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L15 4.707V16.5a.5.5 0 0 1-1 0V4.707l-1.146 1.147a.5.5 0 0 1-.708 0zM2 10.5a.5.5 0 0 1 .5-.5H6V8.5a.5.5 0 0 1 1 0V10h3.5a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zM3.5 17a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1.25c1.052 0 2.347.208 3.395.879C9.224 13.569 10 14.728 10 16.5a.5.5 0 0 1-1 0c0-1.428-.599-2.27-1.395-2.779C6.778 13.191 5.698 13 4.75 13H4v3.5a.5.5 0 0 1-.5.5z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default TextDirectionRotate270Ac;
