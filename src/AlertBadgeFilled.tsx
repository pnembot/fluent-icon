import type { SVGProps } from "react";

export function AlertBadgeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.45 16.002a2.501 2.501 0 0 1-4.9 0h4.9ZM9.998 2c1.09 0 2.113.28 2.995.77A3 3 0 0 0 16 7.83v3.579l.953 2.587l.026.085l.015.086l.005.089c0 .315-.195.59-.522.707l-.113.033l-.115.01H3.752a.75.75 0 0 1-.26-.047c-.287-.105-.475-.372-.482-.716l.004-.117l.034-.13l.951-2.584L4 7.793l.005-.225C4.127 4.451 6.77 2 9.998 2ZM15 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"
      />
    </svg>
  );
}
export default AlertBadgeFilled;
