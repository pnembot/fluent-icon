import type { SVGProps } from "react";

export function WindowHeaderVertical(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9ZM7 4h7.5A1.5 1.5 0 0 1 16 5.5v9a1.5 1.5 0 0 1-1.5 1.5H7V4Z"
      />
    </svg>
  );
}
export default WindowHeaderVertical;
