import type { SVGProps } from "react";

export function BorderBottomFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 3.75A.75.75 0 0 1 8.75 3h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 3.75Zm.711 11.751a.707.707 0 0 1 .039-.001h2.5l.039.001H14a1.5 1.5 0 0 0 1.426-1.032l.003-.01a.75.75 0 0 1 1.382.585h.003A3.001 3.001 0 0 1 14 17.001H6c-1.29 0-2.39-.814-2.814-1.957h.005a.75.75 0 1 1 1.413-.492A1.5 1.5 0 0 0 6 15.5h2.711ZM4.604 5.449a1.505 1.505 0 0 1 .939-.878a.75.75 0 0 0-.586-1.38v-.005a3.009 3.009 0 0 0-1.77 1.77h.004a.75.75 0 1 0 1.413.493Zm9.944-.846c.387.151.696.46.85.846a.75.75 0 1 0 1.413-.492h.004a3.009 3.009 0 0 0-1.77-1.77v.004a.75.75 0 1 0-.497 1.412ZM3 11.25a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5Zm13.25.75a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75Z"
      />
    </svg>
  );
}
export default BorderBottomFilled;
