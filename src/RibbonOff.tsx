import type { SVGProps } from "react";

export function RibbonOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.625 5.332L2.146 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708L14 14.707V17.5a.5.5 0 0 1-.748.434L10 16.076l-3.252 1.858A.5.5 0 0 1 6 17.5v-5.028A5.985 5.985 0 0 1 4 8c0-.959.225-1.865.625-2.668Zm8.043 8.044A5.97 5.97 0 0 1 10 14a5.973 5.973 0 0 1-3-.803v3.442l2.752-1.573a.5.5 0 0 1 .496 0L13 16.64v-2.932l-.332-.332Zm-.754-.755L5.379 6.086a5 5 0 0 0 6.534 6.534ZM15 8c0 1.35-.535 2.575-1.404 3.474l.707.707a6 6 0 0 0-8.484-8.484l.707.707A5 5 0 0 1 15 8Z"
      />
    </svg>
  );
}
export default RibbonOff;
