import type { SVGProps } from "react";

export function BorderLeftRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.662 3.073a.509.509 0 0 0-.663.38a.509.509 0 0 0 .462.6A2 2 0 0 1 16 6v8a2 2 0 0 1-1.54 1.947a.509.509 0 0 0-.462.6a.509.509 0 0 0 .664.38A3.001 3.001 0 0 0 17 14V6a3 3 0 0 0-2.338-2.927Zm-9.324 0a.509.509 0 0 1 .663.38a.509.509 0 0 1-.462.6A2 2 0 0 0 4 6v8a2 2 0 0 0 1.54 1.947a.509.509 0 0 1 .462.6a.509.509 0 0 1-.664.38A3.001 3.001 0 0 1 3 14V6a3 3 0 0 1 2.338-2.927ZM8 16.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"
      />
    </svg>
  );
}
export default BorderLeftRight;
