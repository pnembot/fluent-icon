import type { SVGProps } from "react";

export function RulerFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.97 3.198c.02.097.03.198.03.302v13a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 6 16.5v-13A1.5 1.5 0 0 1 7.5 2h5a1.5 1.5 0 0 1 1.47 1.198ZM7 14.5v1h1.5a.5.5 0 0 0 0-1H7Zm0-10v1h1.5a.5.5 0 0 0 0-1H7ZM7 7v1h2.5a.5.5 0 0 0 0-1H7Zm0 2.5v1h1.5a.5.5 0 0 0 0-1H7Zm0 2.504v1h2.5a.5.5 0 1 0 0-1H7Z"
      />
    </svg>
  );
}
export default RulerFilled;
