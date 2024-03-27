import type { SVGProps } from "react";

export function MicOnFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="none">
        <path
          d="M5.5 10a.5.5 0 0 0-1 0a5.5 5.5 0 0 0 5 5.478V17.5a.5.5 0 0 0 1 0v-2.022a5.5 5.5 0 0 0 5-5.478a.5.5 0 0 0-1 0a4.5 4.5 0 1 1-9 0z"
          fill="currentColor"
        />
        <path d="M13 10a3 3 0 0 1-6 0V5a3 3 0 0 1 6 0v5z" fill="currentColor" />
      </g>
    </svg>
  );
}
export default MicOnFilled;
