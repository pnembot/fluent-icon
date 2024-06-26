import type { SVGProps } from "react";

export function AlertOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.004 7.568a5.62 5.62 0 0 1 .58-2.277L2.146 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-2.849-2.85H3.752a.75.75 0 0 1-.259-.046c-.287-.105-.476-.372-.482-.716l.004-.117l.034-.13l.95-2.584L4 7.793l.004-.225ZM17 14.255a.72.72 0 0 1-.163.46L5.786 3.663A6.095 6.095 0 0 1 9.997 2c3.149 0 5.744 2.335 5.984 5.355l.013.223l.005.224l-.001 3.606l.954 2.587l.025.085l.016.086l.005.089Zm-4.55 1.747a2.5 2.5 0 0 1-4.899 0h4.9Z"
      />
    </svg>
  );
}
export default AlertOffFilled;
