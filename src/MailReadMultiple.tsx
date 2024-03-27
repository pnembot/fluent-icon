import type { SVGProps } from "react";

export function MailReadMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.262 2.074a.5.5 0 0 0-.524 0L2.714 5.781A1.5 1.5 0 0 0 2 7.06v5.44A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5V7.059a1.5 1.5 0 0 0-.714-1.278L9.262 2.074ZM3.454 6.5L9 3.087L14.546 6.5L9 9.913L3.454 6.5ZM3 7.395l5.738 3.53a.5.5 0 0 0 .524 0L15 7.396V12.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 12.5V7.395ZM6.5 17a2.496 2.496 0 0 1-2-1H14a3 3 0 0 0 3-3V7.059c0-.164-.016-.325-.047-.483l.333.205A1.5 1.5 0 0 1 18 8.06V13a4 4 0 0 1-4 4H6.5Z"
      />
    </svg>
  );
}
export default MailReadMultiple;
