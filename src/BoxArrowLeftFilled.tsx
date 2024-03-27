import type { SVGProps } from "react";

export function BoxArrowLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m17.421 4.992l-3.046 1.219l-7.5-3L8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.757 2.303a1.5 1.5 0 0 1 .364.208Zm-7.42 2.969l3.028-1.212l-7.5-3l-2.586 1.035a1.499 1.499 0 0 0-.364.208L10 7.961ZM2 6.176c0-.11.012-.219.035-.324L9.5 8.838v3.367a5.48 5.48 0 0 0-.5 2.294c0 .82.18 1.597.5 2.295v.938a3.482 3.482 0 0 1-.8-.214l-5.757-2.303A1.5 1.5 0 0 1 2 13.822V6.176Zm16 0v4.08A5.477 5.477 0 0 0 14.5 9a5.485 5.485 0 0 0-4 1.724V8.838l7.465-2.986c.023.105.035.214.035.324Zm1 8.323a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0Zm-6.856-.35l.003-.003l2-2a.5.5 0 1 1 .707.707L13.707 14H16.5a.5.5 0 0 1 0 1h-2.793l1.147 1.147a.5.5 0 1 1-.707.707l-2-2a.499.499 0 0 1-.147-.35v-.007a.498.498 0 0 1 .144-.348Z"
      />
    </svg>
  );
}
export default BoxArrowLeftFilled;
