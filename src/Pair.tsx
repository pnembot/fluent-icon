import type { SVGProps } from "react";

export function Pair(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 3.5a1.5 1.5 0 0 0 1 1.415v6.17A1.5 1.5 0 1 0 4.915 13H7v2.085A1.5 1.5 0 1 0 8.915 17h6.17A1.5 1.5 0 1 0 17 15.085v-6.17A1.5 1.5 0 1 0 15.085 7H13V4.915A1.5 1.5 0 1 0 11.085 3h-6.17A1.5 1.5 0 0 0 2 3.5ZM8.915 16A1.504 1.504 0 0 0 8 15.085V13h3.085A1.5 1.5 0 1 0 13 11.085V8h2.085c.151.426.489.764.915.915v6.17a1.508 1.508 0 0 0-.915.915h-6.17ZM4 11.085v-6.17c.426-.151.764-.489.915-.915h6.17c.151.426.489.764.915.915V7H8.915A1.5 1.5 0 1 0 7 8.915V12H4.915A1.504 1.504 0 0 0 4 11.085Zm8 0a1.508 1.508 0 0 0-.915.915H8V8.915c.426-.151.764-.489.915-.915H12v3.085Z"
      />
    </svg>
  );
}
export default Pair;
