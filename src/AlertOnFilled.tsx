import type { SVGProps } from "react";

export function AlertOnFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M1.796 2.098a.5.5 0 1 0-.6.8L3.198 4.4a.5.5 0 1 0 .6-.8L1.796 2.098ZM1 7a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1H1Zm11.45 9a2.501 2.501 0 0 1-4.9 0h4.9ZM9.998 2c3.149 0 5.744 2.334 5.984 5.355l.014.222l.004.225l-.001 3.606l.954 2.587l.025.084l.016.087l.005.088c0 .315-.196.59-.522.707l-.113.033l-.115.01H3.751a.75.75 0 0 1-.259-.046c-.287-.106-.476-.372-.482-.716l.004-.118l.034-.13l.951-2.583L4 7.792l.004-.224C4.127 4.45 6.771 2 9.998 2Zm8.906.198a.5.5 0 0 0-.7-.1L16.202 3.6a.5.5 0 0 0 .6.8l2.002-1.502a.5.5 0 0 0 .1-.7ZM19.5 7.5A.5.5 0 0 0 19 7h-1.5a.5.5 0 0 0 0 1H19a.5.5 0 0 0 .5-.5Z"
      />
    </svg>
  );
}
export default AlertOnFilled;
