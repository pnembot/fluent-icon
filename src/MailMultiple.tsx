import type { SVGProps } from "react";

export function MailMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16 5.5A2.5 2.5 0 0 0 13.5 3h-9A2.5 2.5 0 0 0 2 5.5v7A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5v-7ZM9.254 9.931L15 6.961V12.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 12.5V6.963l5.746 2.968l.082.038a.5.5 0 0 0 .426-.038ZM4.5 4h9A1.5 1.5 0 0 1 15 5.5v.301L9 8.92L3 5.802V5.5A1.5 1.5 0 0 1 4.5 4Zm2 13a2.496 2.496 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-7c.607.456 1 1.182 1 2v5a4.5 4.5 0 0 1-4.5 4.5h-7Z"
      />
    </svg>
  );
}
export default MailMultiple;
