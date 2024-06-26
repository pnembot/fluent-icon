import type { SVGProps } from "react";

export function MailUnreadFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.5 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm-13-3h9.535a3.499 3.499 0 0 0 1.72 3.535L10 9.92L2.015 5.223A2.5 2.5 0 0 1 4.5 3Zm5.754 7.931l6.742-3.967a3.53 3.53 0 0 0 1.004 0V13.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5V6.373l7.747 4.558a.5.5 0 0 0 .507 0Z"
      />
    </svg>
  );
}
export default MailUnreadFilled;
