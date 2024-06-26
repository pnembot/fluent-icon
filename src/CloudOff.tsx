import type { SVGProps } from "react";

export function CloudOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l3.67 3.668a5.326 5.326 0 0 0-.463 1.724l-.251.005C3.373 8.347 2 9.821 2 11.623C2 13.488 3.47 15 5.282 15h9.01l2.854 2.854a.5.5 0 0 0 .708-.708l-15-15ZM13.293 14h-8.01C4.028 14 3 12.942 3 11.623c0-1.32 1.028-2.377 2.282-2.377h.071a1 1 0 0 0 .995-.9c.038-.38.116-.735.23-1.06L13.293 14ZM17 11.623c0 .898-.477 1.675-1.176 2.08l.724.724A3.4 3.4 0 0 0 18 11.623c0-1.865-1.47-3.377-3.282-3.377h-.071C14.415 5.923 12.817 4 10 4c-1.209 0-2.193.352-2.941.938l.715.715C8.36 5.233 9.112 5 10 5c2.108 0 3.45 1.325 3.652 3.346a1 1 0 0 0 .995.9h.071c1.254 0 2.282 1.058 2.282 2.377Z"
      />
    </svg>
  );
}
export default CloudOff;
