import type { SVGProps } from "react";

export function Multiplier1x(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 6.5a.5.5 0 0 0-.898-.302a9.47 9.47 0 0 0-.22.306c-.33.472-.702 1.005-1.64 1.567a.5.5 0 1 0 .515.858c.545-.327.941-.66 1.243-.972V13.5a.5.5 0 1 0 1 0v-7Zm2.854 3.646a.5.5 0 0 0-.708.707L11.293 12l-1.147 1.146a.5.5 0 0 0 .708.707L12 12.707l1.146 1.146a.5.5 0 0 0 .708-.707L12.707 12l1.147-1.147a.5.5 0 0 0-.708-.707L12 11.293l-1.146-1.147Z"
      />
    </svg>
  );
}
export default Multiplier1x;
