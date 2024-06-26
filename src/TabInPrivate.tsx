import type { SVGProps } from "react";

export function TabInPrivate(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3ZM4 5.5v1.793L7.293 4H5.5A1.5 1.5 0 0 0 4 5.5Zm0 3.207v2.586L11.293 4H8.707L4 8.707ZM12.707 4L4 12.707V14.5c0 .232.052.45.146.647l11-11A1.495 1.495 0 0 0 14.5 4h-1.793Zm3.147.853l-11 11c.195.095.414.147.646.147h1.793L16 7.293V5.5c0-.232-.053-.45-.146-.647ZM16 8.707L8.707 16h2.586L16 11.293V8.707Zm0 4L12.707 16H14.5a1.5 1.5 0 0 0 1.5-1.5v-1.793Z"
      />
    </svg>
  );
}
export default TabInPrivate;
