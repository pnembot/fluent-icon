import type { SVGProps } from "react";

export function ScanObjectFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 4.5A1.5 1.5 0 0 1 4.5 3h2a.5.5 0 0 0 0-1h-2A2.5 2.5 0 0 0 2 4.5v2a.5.5 0 0 0 1 0v-2Zm14 11a1.5 1.5 0 0 1-1.5 1.5h-2a.5.5 0 0 0 0 1h2a2.5 2.5 0 0 0 2.5-2.5v-2a.5.5 0 0 0-1 0v2ZM15.5 3A1.5 1.5 0 0 1 17 4.5v2a.5.5 0 0 0 1 0v-2A2.5 2.5 0 0 0 15.5 2h-2a.5.5 0 0 0 0 1h2ZM3 15.5A1.5 1.5 0 0 0 4.5 17h2a.5.5 0 0 1 0 1h-2A2.5 2.5 0 0 1 2 15.5v-2a.5.5 0 0 1 1 0v2Zm8.233-8.597a1.5 1.5 0 0 0-2.466 0l-2.592 3.743C5.487 11.641 6.2 13 7.41 13h5.183c1.21 0 1.921-1.359 1.233-2.354l-2.592-3.743Z"
      />
    </svg>
  );
}
export default ScanObjectFilled;
