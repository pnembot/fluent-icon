import type { SVGProps } from "react";

export function MegaphoneLoud(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.158 1.026a.5.5 0 0 1 .317.632l-.5 1.5a.5.5 0 0 1-.95-.316l.5-1.5a.5.5 0 0 1 .633-.316Zm3.697 1.828a.5.5 0 1 0-.708-.707l-2 2a.5.5 0 0 0 .707.707l2-2Zm-10.248.292a2 2 0 0 1 3.261-.515l6.587 6.98a2 2 0 0 1-.648 3.203L12.87 14.55A3.504 3.504 0 0 1 9.5 19a3.498 3.498 0 0 1-2.975-1.655l-1.2.529a1.5 1.5 0 0 1-1.661-.308l-1.222-1.21a1.5 1.5 0 0 1-.299-1.71l5.464-11.5Zm-.154 13.789a2.5 2.5 0 0 0 4.488-1.977l-4.488 1.977Zm2.688-13.617a1 1 0 0 0-1.63.257l-5.465 11.5a.5.5 0 0 0 .1.569l1.222 1.211a.5.5 0 0 0 .553.102L16.403 11.9a1 1 0 0 0 .325-1.601l-6.587-6.98ZM17 6a.5.5 0 0 0 0 1h1.5a.5.5 0 1 0 0-1H17Z"
      />
    </svg>
  );
}
export default MegaphoneLoud;
