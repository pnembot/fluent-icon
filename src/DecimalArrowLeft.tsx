import type { SVGProps } from "react";

export function DecimalArrowLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 3A2.5 2.5 0 0 0 6 5.5v4a2.5 2.5 0 0 0 5 0v-4A2.5 2.5 0 0 0 8.5 3ZM7 5.5a1.5 1.5 0 1 1 3 0v4a1.5 1.5 0 0 1-3 0v-4ZM3 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm12.5-9A2.5 2.5 0 0 0 13 5.5v3.707a5.48 5.48 0 0 1 1-.185V5.5a1.5 1.5 0 0 1 3 0v4c0 .033-.001.066-.003.098c.323.165.627.36.909.583c.061-.216.094-.445.094-.681v-4A2.5 2.5 0 0 0 15.5 3Zm-1 16a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Zm-2.353-4.854l-.003.003a.499.499 0 0 0-.144.348v.006a.5.5 0 0 0 .146.35l2 2a.5.5 0 0 0 .708-.707L13.707 15H16.5a.5.5 0 0 0 0-1h-2.793l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2Z"
      />
    </svg>
  );
}
export default DecimalArrowLeft;
