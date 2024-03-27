import type { SVGProps } from "react";

export function MailListFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.5 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm-7-2h5.585a1.497 1.497 0 0 0 .297 1.5A1.5 1.5 0 0 0 11.5 8h3.464L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4Zm5.754 7.931L16.934 8h.566c.175 0 .344-.03.5-.085V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.747 4.558a.5.5 0 0 0 .507 0Z"
      />
    </svg>
  );
}
export default MailListFilled;
