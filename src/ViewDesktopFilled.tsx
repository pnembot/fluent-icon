import type { SVGProps } from "react";

export function ViewDesktopFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M1.962 4.5a1.5 1.5 0 0 1 1.5-1.5h12.94a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H12v2.015h1.499a.5.5 0 0 1 0 1h-7a.5.5 0 1 1 0-1h1.5V14H3.463a1.5 1.5 0 0 1-1.5-1.5v-8ZM9 14v2.015h2V14H9ZM4 5.5v6a.5.5 0 0 0 .5.5h.998a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5H4.5a.5.5 0 0 0-.5.5Zm3 0v6a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5Z"
      />
    </svg>
  );
}
export default ViewDesktopFilled;
