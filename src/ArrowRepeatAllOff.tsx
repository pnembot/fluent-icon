import type { SVGProps } from "react";

export function ArrowRepeatAllOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.146 2.146a.5.5 0 0 1 .638-.057l.07.057l15 15l.057.07a.5.5 0 0 1-.695.695l-.07-.057l-2.988-2.989a4.991 4.991 0 0 1-.861.126L13 15H7c-.102 0-.203-.003-.304-.01l1.658 1.656a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057l-2.5-2.5a.5.5 0 0 1-.057-.638l.057-.07l2.5-2.5a.5.5 0 0 1 .765.638l-.057.07l-1.636 1.636l.14.008L7 14h6c.095 0 .19-.003.283-.01L5.56 6.267a4.001 4.001 0 0 0-1.665 6.255a.5.5 0 1 1-.801.601a5 5 0 0 1 1.707-7.616L2.147 2.855l-.057-.07a.5.5 0 0 1 .057-.638ZM16.5 6.671c.116 0 .223.04.308.107l.067.063l.017.02A4.98 4.98 0 0 1 18 10c0 1.608-.76 3.04-1.939 3.954l-.714-.714A3.995 3.995 0 0 0 17 10c0-.953-.334-1.829-.89-2.516a.5.5 0 0 1 .39-.812ZM12.284 2.59l.07.057l2.5 2.5a.5.5 0 0 1 .057.638l-.057.07l-2.5 2.5a.5.5 0 0 1-.765-.638l.057-.07l1.637-1.636l-.14-.008L13 6H8.106l-1-1H13c.102 0 .203.003.304.01l-1.658-1.656a.5.5 0 0 1-.057-.638l.057-.07a.5.5 0 0 1 .638-.057Z"
      />
    </svg>
  );
}
export default ArrowRepeatAllOff;
