import type { SVGProps } from "react";

export function ScaleFillFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm3.309 1.038a.498.498 0 0 0-.16.106l-.005.005A.498.498 0 0 0 6 6.5v2a.5.5 0 0 0 1 0v-.793l1.146 1.147a.5.5 0 1 0 .708-.708L7.707 7H8.5a.5.5 0 0 0 0-1h-2a.499.499 0 0 0-.191.038ZM6 11.5v2a.499.499 0 0 0 .144.351l.005.005a.5.5 0 0 0 .348.144H8.5a.5.5 0 0 0 0-1h-.793l1.147-1.146a.5.5 0 0 0-.708-.708L7 12.293V11.5a.5.5 0 0 0-1 0Zm7.851-5.356A.498.498 0 0 0 13.5 6h-2a.5.5 0 0 0 0 1h.793l-1.147 1.146a.5.5 0 0 0 .708.708L13 7.707V8.5a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.144-.351l-.005-.005Zm-.16 7.818a.499.499 0 0 0 .16-.106l.005-.005A.499.499 0 0 0 14 13.5v-2a.5.5 0 0 0-1 0v.793l-1.146-1.147a.5.5 0 0 0-.708.708L12.293 13H11.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .191-.038Z"
      />
    </svg>
  );
}
export default ScaleFillFilled;
