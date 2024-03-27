import type { SVGProps } from "react";

export function Pivot(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 4A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16h4.585a1.506 1.506 0 0 0 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.585a1.506 1.506 0 0 0-1 0V5.5A1.5 1.5 0 0 0 14.5 4h-9ZM6 5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Zm4 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-4ZM6 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H6Zm10.854 2.146a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.708l.146-.147V14.5a1.5 1.5 0 0 1-1.5 1.5h-1.793l.147-.146a.5.5 0 0 0-.708-.708l-1 1a.5.5 0 0 0 0 .708l1 1a.5.5 0 0 0 .708-.708L12.707 17H14.5a2.5 2.5 0 0 0 2.5-2.5v-1.793l.146.147a.5.5 0 0 0 .708-.708l-1-1Z"
      />
    </svg>
  );
}
export default Pivot;
