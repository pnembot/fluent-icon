import type { SVGProps } from "react";

export function DocumentTextLink(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2h-3.337c.148-.31.251-.647.302-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v9H4V4Zm7.5 3h3.293L11 3.207V6.5a.5.5 0 0 0 .5.5Zm2 8h-2.837a3.511 3.511 0 0 0-.714-1H13.5a.5.5 0 0 1 0 1Zm0-2h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1Zm-7-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3 4a2.5 2.5 0 0 0 0 5H4a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H4a.5.5 0 0 0 0-1h-.5ZM7 14a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H7a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H7Zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default DocumentTextLink;
