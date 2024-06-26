import type { SVGProps } from "react";

export function BorderBottom(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM5.54 4.053A2.003 2.003 0 0 0 4.052 5.54a.509.509 0 0 1-.6.462a.509.509 0 0 1-.38-.663a3.004 3.004 0 0 1 2.265-2.265a.509.509 0 0 1 .663.38a.509.509 0 0 1-.462.6ZM3.072 14.662a.509.509 0 0 1 .38-.663a.509.509 0 0 1 .6.462A2 2 0 0 0 6 16h8a2 2 0 0 0 1.947-1.54a.509.509 0 0 1 .6-.463a.509.509 0 0 1 .38.665A3.001 3.001 0 0 1 14 17H6a3 3 0 0 1-2.927-2.338ZM14.591 3.054a.497.497 0 0 1 .07.02a3.004 3.004 0 0 1 2.266 2.264a.506.506 0 0 1-.38.664a.509.509 0 0 1-.6-.463a2.003 2.003 0 0 0-1.486-1.486a.509.509 0 0 1-.462-.6a.509.509 0 0 1 .592-.4ZM16.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5ZM3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Z"
      />
    </svg>
  );
}
export default BorderBottom;
