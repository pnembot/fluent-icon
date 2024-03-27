import type { SVGProps } from "react";

export function Wrench(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 6.5a4.5 4.5 0 0 1 6.352-4.102a.5.5 0 0 1 .148.809L13.207 5.5L14.5 6.793L16.793 4.5a.5.5 0 0 1 .809.147a4.5 4.5 0 0 1-5.207 6.216L6.03 17.311a2.357 2.357 0 0 1-3.374-3.293L9.082 7.36A4.52 4.52 0 0 1 9 6.5ZM13.5 3a3.5 3.5 0 0 0-3.387 4.386a.5.5 0 0 1-.125.473l-6.612 6.854a1.357 1.357 0 0 0 1.942 1.896l6.574-6.66a.5.5 0 0 1 .512-.124a3.5 3.5 0 0 0 4.521-4.044l-2.072 2.073a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.708l2.073-2.072a3.518 3.518 0 0 0-.72-.074Z"
      />
    </svg>
  );
}
export default Wrench;
