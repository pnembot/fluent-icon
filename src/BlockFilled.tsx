import type { SVGProps } from "react";

export function BlockFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
          d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16zm3.5 7.5h-7l-.09.008a.5.5 0 0 0 .09.992h7l.09-.008a.5.5 0 0 0-.09-.992z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default BlockFilled;
