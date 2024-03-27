import type { SVGProps } from "react";

export function DocumentBulletListCubeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v5.764l.106-.053a2 2 0 0 1 1.788 0l2.153 1.077A.5.5 0 0 1 8.5 10h5a.5.5 0 0 1 0 1H9.323c.3.264.514.613.614 1H13.5a.5.5 0 0 1 0 1H10v1h3.5a.5.5 0 0 1 0 1H10v1.504A2 2 0 0 1 9.327 18H14.5a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Zm-2.553 5.106l-3-1.5a1 1 0 0 0-.894 0l-3 1.5A1 1 0 0 0 1 12.5v4.004a1 1 0 0 0 .553.894l3 1.5a1 1 0 0 0 .894 0l3-1.5A1 1 0 0 0 9 16.504V12.5a1 1 0 0 0-.553-.894ZM2.04 12.732a.5.5 0 0 1 .657-.263L5 13.456l2.303-.987a.5.5 0 0 1 .394.92l-2.197.94V17a.5.5 0 1 1-1 0v-2.67l-2.197-.942a.5.5 0 0 1-.263-.656Z"
      />
    </svg>
  );
}
export default DocumentBulletListCubeFilled;
