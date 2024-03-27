import type { SVGProps } from "react";

export function MegaphoneOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l3.335 3.334l-2.367.63A1.5 1.5 0 0 0 2 8.269v2.511a1.5 1.5 0 0 0 1.026 1.423L5 12.86v.89a3.25 3.25 0 0 0 6.27 1.2l4.46 1.487l1.416 1.417a.5.5 0 0 0 .708-.708l-15-15Zm11.295 12.71L3.342 11.254A.5.5 0 0 1 3 10.779V8.27a.5.5 0 0 1 .371-.484l2.927-.78l7.85 7.85Zm-3.829-.222A2.251 2.251 0 0 1 6 13.75v-.556l4.32 1.44ZM17 4.802v10.077l.863.863a1.49 1.49 0 0 0 .137-.63V4.803a1.5 1.5 0 0 0-1.887-1.45l-8.4 2.24l.818.817l7.84-2.09a.5.5 0 0 1 .629.483Z"
      />
    </svg>
  );
}
export default MegaphoneOff;
