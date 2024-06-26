import type { SVGProps } from "react";

export function PresenceOof(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.697 7.702a1 1 0 1 0-1.415-1.413l-2.995 3a1 1 0 0 0 0 1.413l2.995 3a1 1 0 1 0 1.415-1.413l-1.29-1.294h3.598a1 1 0 1 0 0-2H9.406l1.291-1.293ZM9.995 0C4.475 0 0 4.475 0 9.995s4.475 9.996 9.995 9.996s9.996-4.475 9.996-9.996C19.99 4.475 15.516 0 9.995 0ZM2 9.995a7.995 7.995 0 1 1 15.99 0a7.995 7.995 0 0 1-15.99 0Z"
      />
    </svg>
  );
}
export default PresenceOof;
