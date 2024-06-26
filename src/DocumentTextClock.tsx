import type { SVGProps } from "react";

export function DocumentTextClock(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.743 11a5.533 5.533 0 0 0-1.08-1H13.5a.5.5 0 0 1 0 1H9.743Zm.657 1c.162.317.294.651.393 1H13.5a.5.5 0 0 0 0-1h-3.1Zm.6 2.5c0 .168-.008.335-.022.5H13.5a.5.5 0 0 0 0-1h-2.522c.014.165.022.332.022.5ZM5 4v5.022a5.48 5.48 0 0 0-1 .185V4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2H9.743c.253-.307.474-.642.657-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1Zm6.5 3h3.293L11 3.207V6.5a.5.5 0 0 0 .5.5Zm-6 12a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM5 12.5a.5.5 0 0 1 1 0V14h1a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5v-2Z"
      />
    </svg>
  );
}
export default DocumentTextClock;
