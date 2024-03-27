import type { SVGProps } from "react";

export function CubeMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.205 2.513a5 5 0 0 1 3.59 0l4.243 1.632c.58.223.962.78.962 1.4v.141a2.497 2.497 0 0 0-.603-.333l-4.961-1.908a4 4 0 0 0-2.872 0L3.603 5.353A2.497 2.497 0 0 0 3 5.686v-.14a1.5 1.5 0 0 1 .962-1.4l4.243-1.633ZM6.04 8.303a.5.5 0 0 1 .657-.263L10 9.456l3.303-1.416a.5.5 0 0 1 .394.92L10.5 10.33v3.17a.5.5 0 0 1-1 0v-3.17L6.303 8.96a.5.5 0 0 1-.263-.657Zm2.883-3.925a3 3 0 0 1 2.154 0l4.961 1.909c.58.222.962.779.962 1.4v6.626a1.5 1.5 0 0 1-.962 1.4l-4.961 1.908a3 3 0 0 1-2.154 0l-4.961-1.908a1.5 1.5 0 0 1-.962-1.4V7.687a1.5 1.5 0 0 1 .962-1.4l4.961-1.909Zm1.795.934a2 2 0 0 0-1.436 0L4.321 7.22A.5.5 0 0 0 4 7.687v6.626a.5.5 0 0 0 .32.467l4.962 1.908a2 2 0 0 0 1.436 0l4.962-1.908a.5.5 0 0 0 .32-.467V7.687a.5.5 0 0 0-.32-.467l-4.962-1.908Z"
      />
    </svg>
  );
}
export default CubeMultiple;
