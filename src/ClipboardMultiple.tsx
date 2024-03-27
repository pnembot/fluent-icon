import type { SVGProps } from "react";

export function ClipboardMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M6.5 1a1.5 1.5 0 0 0-1.415 1H4.5A1.5 1.5 0 0 0 3 3.5v8A1.5 1.5 0 0 0 4.5 13h6a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 10.5 2h-.585A1.5 1.5 0 0 0 8.5 1h-2ZM6 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM4.5 3h.585A1.5 1.5 0 0 0 6.5 4h2a1.5 1.5 0 0 0 1.415-1h.585a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5Zm8.5 8.5V3.27c.6.35 1 .99 1 1.73v6.5c0 1.93-1.57 3.5-3.5 3.5H6c-.74 0-1.38-.4-1.73-1h6.23a2.5 2.5 0 0 0 2.5-2.5Z"
      />
    </svg>
  );
}
export default ClipboardMultiple;
