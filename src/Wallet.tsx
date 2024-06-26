import type { SVGProps } from "react";

export function Wallet(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.5 11a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM3 4.5A1.5 1.5 0 0 1 4.5 3H14a2 2 0 0 1 2 2v.268A2 2 0 0 1 17 7v8a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 14.5v-10ZM14 4H4.5a.5.5 0 0 0 0 1H15a1 1 0 0 0-1-1ZM4.5 6c-.175 0-.344-.03-.5-.085V14.5A1.5 1.5 0 0 0 5.5 16H15a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4.5Z"
      />
    </svg>
  );
}
export default Wallet;
