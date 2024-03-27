import type { SVGProps } from "react";

export function CodeVbRectangle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.727 8.362A1.5 1.5 0 0 0 9.5 6h-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1.25a1.5 1.5 0 0 0 .977-2.638ZM9 7h.5a.5.5 0 1 1 0 1H9V7Zm.75 3H9V9h.75a.5.5 0 0 1 0 1ZM7.468 6.676l-1.5 4a.5.5 0 0 1-.936 0l-1.5-4a.5.5 0 0 1 .936-.352L5.5 9.076l1.032-2.752a.5.5 0 0 1 .936.352ZM2.75 3A1.75 1.75 0 0 0 1 4.75v7.5c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0 0 14 12.25v-7.5A1.75 1.75 0 0 0 12.25 3h-9.5ZM2 4.75A.75.75 0 0 1 2.75 4h9.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75v-7.5Z"
      />
    </svg>
  );
}
export default CodeVbRectangle;
