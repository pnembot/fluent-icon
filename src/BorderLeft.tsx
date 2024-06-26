import type { SVGProps } from "react";

export function BorderLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 8.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Zm-1.053-2.96a2.003 2.003 0 0 0-1.486-1.487a.509.509 0 0 1-.462-.6a.509.509 0 0 1 .663-.38a3.004 3.004 0 0 1 2.265 2.265a.509.509 0 0 1-.38.663a.508.508 0 0 1-.6-.462ZM5.338 3.072a.509.509 0 0 1 .663.38a.509.509 0 0 1-.462.6A2 2 0 0 0 4 6v8a2 2 0 0 0 1.54 1.947a.508.508 0 0 1 .463.6a.509.509 0 0 1-.665.38A3.001 3.001 0 0 1 3 14V6a3 3 0 0 1 2.338-2.927ZM16.946 14.59a.496.496 0 0 1-.02.07a3.004 3.004 0 0 1-2.264 2.266a.506.506 0 0 1-.664-.38a.509.509 0 0 1 .463-.6a2.003 2.003 0 0 0 1.486-1.486a.508.508 0 0 1 .6-.462a.509.509 0 0 1 .4.592ZM8 16.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"
      />
    </svg>
  );
}
export default BorderLeft;
