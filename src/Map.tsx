import type { SVGProps } from "react";

export function Map(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.73 3.057A.5.5 0 0 1 18 3.5V13a.5.5 0 0 1-.213.41l-5 3.5a.5.5 0 0 1-.574 0L7.5 13.61l-4.713 3.3A.5.5 0 0 1 2 16.5V7a.5.5 0 0 1 .213-.41l5-3.5a.5.5 0 0 1 .574 0l4.713 3.3l4.713-3.3a.5.5 0 0 1 .518-.033ZM12 7.26l-4-2.8v8.28l4 2.8V7.26Zm1 8.28l4-2.8V4.46l-4 2.8v8.28Zm-6-2.8V4.46l-4 2.8v8.28l4-2.8Z"
      />
    </svg>
  );
}
export default Map;
