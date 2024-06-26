import type { SVGProps } from "react";

export function TextPositionThrough(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5ZM3.5 6h2.758a4.484 4.484 0 0 0-.502 1H3.5a.5.5 0 0 1 0-1Zm0 3h2v1h-2a.5.5 0 0 1 0-1Zm0 3h2v1h-2a.5.5 0 0 1 0-1Zm13 0h-2v1h2a.5.5 0 0 0 0-1Zm-8-3v1h3V9h-3Zm8 1h-2V9h2a.5.5 0 0 1 0 1Zm-8 2v1h3v-1h-3Zm8-5h-2.256a4.483 4.483 0 0 0-.502-1H16.5a.5.5 0 0 1 0 1Zm-13 8h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1Zm4-6.5a2.5 2.5 0 0 1 5 0v5a.5.5 0 0 0 1 0v-5a3.5 3.5 0 1 0-7 0v5a.5.5 0 0 0 1 0v-5Z"
      />
    </svg>
  );
}
export default TextPositionThrough;
