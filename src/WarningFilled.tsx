import type { SVGProps } from "react";

export function WarningFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.681 2.785c.568-1.047 2.071-1.047 2.638 0l6.5 12.002A1.5 1.5 0 0 1 16.502 17H3.498a1.5 1.5 0 0 1-1.319-2.215l6.502-12ZM10.5 7.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0v-4Zm.25 6.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Z"
      />
    </svg>
  );
}
export default WarningFilled;
