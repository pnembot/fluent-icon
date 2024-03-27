import type { SVGProps } from "react";

export function SplitHorizontalFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.5 10a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1h15ZM14 2a2 2 0 0 1 2 2v4H4V4a2 2 0 0 1 2-2h8ZM4 11v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4H4Z"
      />
    </svg>
  );
}
export default SplitHorizontalFilled;
