import type { SVGProps } from "react";

export function ShieldBadgeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6.007a18.39 18.39 0 0 1-.007-.5V9c3.23 0 3.748-.835 4.114-1.426c.2-.324.355-.574.886-.574c.53 0 .686.25.886.574c.197.317.436.704 1.114.995V7a2 2 0 0 0-2-2H4Zm10.53 3.832a.884.884 0 0 1-.07.125a1.633 1.633 0 0 1-.385.393c-.397.298-1.16.65-2.575.65a.5.5 0 0 0-.5.5v2c0 1.034.127 2.137.69 3.123c.573 1.001 1.558 1.82 3.152 2.351a.5.5 0 0 0 .316 0c1.594-.53 2.579-1.35 3.151-2.35c.564-.987.691-2.09.691-3.124v-2a.5.5 0 0 0-.5-.5c-1.414 0-2.178-.352-2.575-.65a1.633 1.633 0 0 1-.384-.393a.884.884 0 0 1-.07-.124a.5.5 0 0 0-.942-.001Zm.943.007l.001.002l-.003-.008l.001.003l.001.003Zm-.945-.003l.001-.004l-.003.01v-.003l.002-.003Z"
      />
    </svg>
  );
}
export default ShieldBadgeFilled;
