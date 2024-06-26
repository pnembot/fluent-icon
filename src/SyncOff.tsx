import type { SVGProps } from "react";

export function SyncOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0Zm8-7a7.002 7.002 0 0 0-6.93 6h5.196l.753-2.638a.5.5 0 1 1 .962.275l-2 7a.5.5 0 1 1-.962-.275L7.98 10H3a7 7 0 1 0 14 0h-4.98l-1.04 3.637a.5.5 0 1 1-.96-.275l2-7a.5.5 0 1 1 .96.275L12.307 9h4.623A7.001 7.001 0 0 0 10 3Z"
      />
    </svg>
  );
}
export default SyncOff;
