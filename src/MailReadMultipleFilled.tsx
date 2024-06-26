import type { SVGProps } from "react";

export function MailReadMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.738 2.074a.5.5 0 0 1 .524 0l6.024 3.707c.07.043.135.091.195.143L9 9.913L2.519 5.924c.06-.052.125-.1.195-.143l6.024-3.707Zm7.239 4.72c.015.087.023.175.023.265V12.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5V7.059c0-.09.008-.179.024-.265l6.714 4.132a.5.5 0 0 0 .524 0l6.714-4.132ZM4.5 16c.456.607 1.182 1 2 1H14a4 4 0 0 0 4-4V8.059a1.5 1.5 0 0 0-.714-1.278l-.333-.205c.031.158.047.32.047.483V13a3 3 0 0 1-3 3H4.5Z"
      />
    </svg>
  );
}
export default MailReadMultipleFilled;
