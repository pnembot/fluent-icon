import type { SVGProps } from "react";

export function ZoomInFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 8.5c0 1.248-.416 2.4-1.117 3.323l4.147 4.147a.75.75 0 0 1-.976 1.133l-.084-.073l-4.147-4.147A5.5 5.5 0 1 1 14 8.5ZM8.5 5.25a.75.75 0 0 0-.75.75v1.75H6a.75.75 0 0 0 0 1.5h1.75V11a.75.75 0 0 0 1.5 0V9.25H11a.75.75 0 0 0 0-1.5H9.25V6a.75.75 0 0 0-.75-.75Z"
      />
    </svg>
  );
}
export default ZoomInFilled;
