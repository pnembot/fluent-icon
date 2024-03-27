import type { SVGProps } from "react";

export function AttachArrowRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m4.828 10.485l5.657-5.657a3 3 0 0 1 4.304 4.179c.39.02.77.081 1.135.179A4.001 4.001 0 0 0 9.778 4.12L4.12 9.778a.5.5 0 0 0 .707.707Zm3.182 5.303l.997-.997c.022.418.09.825.201 1.213l-.49.491a2.5 2.5 0 1 1-3.536-3.535l6.01-6.01a.5.5 0 1 1 .707.706l-6.01 6.01a1.5 1.5 0 0 0 2.121 2.122ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.147.354l.002-.002a.498.498 0 0 0 .145-.349v-.006a.496.496 0 0 0-.147-.35l-2-2a.5.5 0 1 0-.707.707L15.293 14H12.5a.5.5 0 1 0 0 1h2.793l-1.147 1.147a.5.5 0 1 0 .707.707l2-2Z"
      />
    </svg>
  );
}
export default AttachArrowRight;
