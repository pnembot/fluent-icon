import type { SVGProps } from "react";

export function MailProhibitedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 5.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.485 3.485 0 0 1 11 5.5ZM14.5 9c-.786 0-1.512-.26-2.096-.697l4.9-4.9A3.5 3.5 0 0 1 14.5 9Zm0 2c1.33 0 2.55-.472 3.5-1.257V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.747 4.558a.5.5 0 0 0 .507 0l2.23-1.312A5.486 5.486 0 0 0 14.5 11Zm-10-7h4.707a5.496 5.496 0 0 0 2.235 6.072L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4Z"
      />
    </svg>
  );
}
export default MailProhibitedFilled;
