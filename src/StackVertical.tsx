import type { SVGProps } from "react";

export function StackVertical(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v11a.5.5 0 0 1-1 0v-3a1.5 1.5 0 0 0-1.5-1.5h-9A1.5 1.5 0 0 0 4 13.5v3a.5.5 0 0 1-1 0v-11Zm1 6a2.49 2.49 0 0 1 1.5-.5h9a2.49 2.49 0 0 1 1.5.5v-2A1.5 1.5 0 0 0 14.5 8h-9A1.5 1.5 0 0 0 4 9.5v2Zm12-6A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v2c.418-.314.937-.5 1.5-.5h9c.563 0 1.082.186 1.5.5v-2Z"
      />
    </svg>
  );
}
export default StackVertical;
