import type { SVGProps } from "react";

export function DocumentQueue(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM6 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM6.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm3.982-7h.038c.45.01.88.193 1.2.513l3.767 3.767A1.75 1.75 0 0 1 16 7.5v6.75A1.75 1.75 0 0 1 14.25 16h-8.5A1.75 1.75 0 0 1 4 14.25V3.75C4 2.784 4.784 2 5.75 2h4.732ZM5 3.75v10.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H5.75a.75.75 0 0 0-.75.75Zm6 2.75a.5.5 0 0 0 .5.5h3.293l-.013-.013l-3.767-3.767L11 3.207V6.5Zm-8 7a.5.5 0 0 0-1 0v1A3.5 3.5 0 0 0 5.5 18h9a3.5 3.5 0 0 0 3.5-3.5v-1a.5.5 0 0 0-1 0v1a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-1Z"
      />
    </svg>
  );
}
export default DocumentQueue;
