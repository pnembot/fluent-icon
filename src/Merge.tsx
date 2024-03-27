import type { SVGProps } from "react";

export function Merge(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5a.5.5 0 0 1 .5-.5h1.653c1 0 1.952.428 2.616 1.175l2.21 2.486a2.5 2.5 0 0 0 1.868.839h4.446l-3.647-3.646a.5.5 0 0 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l3.647-3.646h-4.446a2.5 2.5 0 0 0-1.868.84l-2.21 2.485A3.5 3.5 0 0 1 5.153 15H3.5a.5.5 0 0 1 0-1h1.653a2.5 2.5 0 0 0 1.868-.84l2.21-2.485c.238-.268.513-.494.813-.675c-.3-.18-.575-.407-.813-.675L7.021 6.84A2.5 2.5 0 0 0 5.153 6H3.5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default Merge;
