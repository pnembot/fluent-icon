import type { SVGProps } from "react";

export function MailReadFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.257 3.071a.5.5 0 0 0-.514 0L2.97 7.134a1.999 1.999 0 0 0-.7.709L10 11.934l7.728-4.091a2 2 0 0 0-.699-.709l-6.772-4.063ZM18 8.831l-7.766 4.11a.5.5 0 0 1-.468 0L2 8.832V14.5A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5V8.83Z"
      />
    </svg>
  );
}
export default MailReadFilled;
