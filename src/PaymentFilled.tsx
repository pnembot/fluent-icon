import type { SVGProps } from "react";

export function PaymentFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.75 4A2.75 2.75 0 0 0 2 6.75V8h16V6.75A2.75 2.75 0 0 0 15.25 4H4.75ZM18 9H2v4.25A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25V9Zm-4.5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default PaymentFilled;
