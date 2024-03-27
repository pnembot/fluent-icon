import type { SVGProps } from "react";

export function Multiplier15x(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.66 6.026A.5.5 0 0 1 5 6.5v7a.5.5 0 0 1-1 0V7.957a5.999 5.999 0 0 1-1.243.972a.5.5 0 0 1-.514-.858c.937-.562 1.31-1.095 1.639-1.567a9.47 9.47 0 0 1 .22-.306a.5.5 0 0 1 .558-.172Zm3.842.433A.5.5 0 0 1 9 6h3.5a.5.5 0 0 1 0 1H9.46L9.3 8.932l1.276-.15A2.618 2.618 0 1 1 10.882 14h-.357a2.975 2.975 0 0 1-2.103-.872l-.276-.275a.5.5 0 1 1 .708-.707l.275.275c.37.37.872.579 1.396.579h.357a1.618 1.618 0 1 0-.19-3.225l-1.884.221a.5.5 0 0 1-.556-.538l.25-3Zm6.352 3.687a.5.5 0 0 0-.708.707L15.293 12l-1.147 1.146a.5.5 0 0 0 .708.707L16 12.707l1.146 1.146a.5.5 0 0 0 .708-.707L16.707 12l1.147-1.147a.5.5 0 0 0-.708-.707L16 11.293l-1.146-1.147ZM6.5 14a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Z"
      />
    </svg>
  );
}
export default Multiplier15x;
