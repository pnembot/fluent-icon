import type { SVGProps } from "react";

export function RoadCone(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.384 2a1 1 0 0 0-.966.742L4.616 17H2.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-2.116L11.582 2.742A1 1 0 0 0 10.616 2H9.384ZM5.651 17l.8-3H11.5a.5.5 0 0 0 0-1H6.717l.534-2H10.5a.5.5 0 0 0 0-1H7.517l1.867-7h1.232l3.733 14H5.651Z"
      />
    </svg>
  );
}
export default RoadCone;
