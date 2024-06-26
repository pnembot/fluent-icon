import type { SVGProps } from "react";

export function MailCopyFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 12.5V6.373l6.746 3.558a.5.5 0 0 0 .507 0L18 6.373V12.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 4 12.5Zm.015-7.277A2.5 2.5 0 0 1 6.5 3h9a2.5 2.5 0 0 1 2.485 2.223L11 8.92L4.015 5.223ZM13.5 17c.818 0 1.544-.393 2-1h-9A3.5 3.5 0 0 1 3 12.5v-7c-.607.456-1 1.182-1 2v5A4.5 4.5 0 0 0 6.5 17h7Z"
      />
    </svg>
  );
}
export default MailCopyFilled;
