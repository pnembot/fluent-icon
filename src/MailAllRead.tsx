import type { SVGProps } from "react";

export function MailAllRead(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.763 2.06a.5.5 0 0 1 .474 0l5.711 3.075A2 2 0 0 1 16 6.895V12.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5V6.896a2 2 0 0 1 1.052-1.761L8.763 2.06ZM9 3.068L3.526 6.015a.999.999 0 0 0-.313.264L9 8.949l5.787-2.67a1 1 0 0 0-.313-.264L9 3.068Zm6 4.213L9.21 9.954a.5.5 0 0 1-.42 0L3 7.281V12.5A1.5 1.5 0 0 0 4.5 14h9a1.5 1.5 0 0 0 1.5-1.5V7.281ZM6.5 17a2.496 2.496 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-6c.607.456 1 1.182 1 2v4a4.5 4.5 0 0 1-4.5 4.5h-7Z"
      />
    </svg>
  );
}
export default MailAllRead;
