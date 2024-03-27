import type { SVGProps } from "react";

export function Code(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.967 3.68a.5.5 0 0 0-.934-.36l-5 13a.5.5 0 1 0 .934.36l5-13ZM5.825 6.12a.5.5 0 0 1 .055.706L3.159 10l2.72 3.175a.5.5 0 0 1-.759.65l-3-3.5a.5.5 0 0 1 0-.65l3-3.5a.5.5 0 0 1 .705-.054Zm8.35 8.26a.5.5 0 0 1-.055-.705l2.722-3.175l-2.722-3.174a.5.5 0 1 1 .76-.651l3 3.5a.5.5 0 0 1 0 .65l-3 3.5a.5.5 0 0 1-.705.055Z"
      />
    </svg>
  );
}
export default Code;
