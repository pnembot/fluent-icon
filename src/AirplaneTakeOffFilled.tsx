import type { SVGProps } from "react";

export function AirplaneTakeOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.299 5.487a7.33 7.33 0 0 1 .377-.328c.583-.473 1.474-1.043 2.492-1.143a2.978 2.978 0 0 1 .886.04c1.238.241 2.147 1.224 2.663 1.93c.595.811.1 1.82-.737 2.09L12.8 9.429l-3.098 4.006c-.97 1.254-2.968.343-2.657-1.212l.293-1.464L4.32 11.8A1.75 1.75 0 0 1 2 10.146V7.16c0-.076.006-.148.019-.217c.157-.897 1.283-1.217 1.902-.62c.096.09.18.204.245.34l.593 1.224l5.805-1.935c.258-.086.503-.249.735-.465ZM5.384 6.624l3.73-1.243L7.508 4.28A1.596 1.596 0 0 0 6.605 4C5.28 4 4.532 5.525 5.345 6.573l.039.051ZM2.75 16.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Z"
      />
    </svg>
  );
}
export default AirplaneTakeOffFilled;
