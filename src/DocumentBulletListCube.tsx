import type { SVGProps } from "react";

export function DocumentBulletListCube(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 10a.5.5 0 0 0-.453.288l.847.423c.157.079.301.176.429.289H13.5a.5.5 0 0 0 0-1h-5ZM5 4v5a2 2 0 0 0-.894.211L4 9.264V4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2H9.327a1.99 1.99 0 0 0 .61-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1Zm8.5 11H10v-1h3.5a.5.5 0 0 1 0 1Zm0-2H10v-.5c0-.171-.022-.339-.063-.5H13.5a.5.5 0 0 1 0 1Zm1.293-6L11 3.207V6.5a.5.5 0 0 0 .5.5h3.293Zm-6.346 4.606l-3-1.5a1 1 0 0 0-.894 0l-3 1.5A1 1 0 0 0 1 12.5v4.004a1 1 0 0 0 .553.894l3 1.5a1 1 0 0 0 .894 0l3-1.5A1 1 0 0 0 9 16.504V12.5a1 1 0 0 0-.553-.894ZM2.04 12.732a.5.5 0 0 1 .657-.263L5 13.456l2.303-.987a.5.5 0 0 1 .394.92l-2.197.94V17a.5.5 0 1 1-1 0v-2.67l-2.197-.942a.5.5 0 0 1-.263-.656Z"
      />
    </svg>
  );
}
export default DocumentBulletListCube;
