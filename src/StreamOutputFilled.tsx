import type { SVGProps } from "react";

export function StreamOutputFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.78 1.97a.75.75 0 1 0-1.06 1.06l1.72 1.72h-3.69A4.75 4.75 0 0 0 9 9.5v1a3.25 3.25 0 0 1-3.25 3.25h-3a.75.75 0 0 0 0 1.5h3a4.75 4.75 0 0 0 4.75-4.75v-1a3.25 3.25 0 0 1 3.25-3.25h3.69l-1.72 1.72a.75.75 0 0 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3ZM13.25 3.5A5.75 5.75 0 0 0 7.5 9.25v1a2.25 2.25 0 0 1-2.25 2.25h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 0 .75-.75v-1A7.25 7.25 0 0 1 13.25 2h.5a.75.75 0 0 1 0 1.5h-.5Zm.914 4.001c-.244.485-.3 1.03-.17 1.544a.75.75 0 0 0-.494.705v1A7.25 7.25 0 0 1 6.25 18h-.5a.75.75 0 0 1 0-1.5h.5A5.75 5.75 0 0 0 12 10.75v-1a2.25 2.25 0 0 1 2.164-2.25Z"
      />
    </svg>
  );
}
export default StreamOutputFilled;
