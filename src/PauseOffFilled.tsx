import type { SVGProps } from "react";

export function PauseOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 3.707V16.5A1.5 1.5 0 0 0 4.5 18h2A1.5 1.5 0 0 0 8 16.5V8.707l4 4V16.5a1.5 1.5 0 0 0 1.5 1.5h2c.489 0 .923-.234 1.197-.596l.45.45a.5.5 0 0 0 .707-.708l-15-15a.5.5 0 1 0-.708.708L3 3.707Zm9 6.172l5 5V3.5A1.5 1.5 0 0 0 15.5 2h-2A1.5 1.5 0 0 0 12 3.5v6.379Zm-7.84-7.84L8 5.879V3.5A1.5 1.5 0 0 0 6.5 2h-2c-.117 0-.23.013-.34.039Z"
      />
    </svg>
  );
}
export default PauseOffFilled;
