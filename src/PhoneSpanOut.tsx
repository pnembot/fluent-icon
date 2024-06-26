import type { SVGProps } from "react";

export function PhoneSpanOut(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3.085a1.506 1.506 0 0 0-1 0V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3.085a1.506 1.506 0 0 0-1 0V4Zm0 9.915c.323.114.677.114 1 0V16a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.085c.323.114.677.114 1 0V16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2.085Zm-1.853-3.769l2-2a.5.5 0 1 1 .707.708L4.707 10H7.5a.5.5 0 0 1 0 1H4.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2A.499.499 0 0 1 3 10.503v-.006a.498.498 0 0 1 .144-.348l.003-.003Zm11.707 2.708l2-2l.002-.003a.499.499 0 0 0 .144-.348v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L15.293 10H12.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708Z"
      />
    </svg>
  );
}
export default PhoneSpanOut;
