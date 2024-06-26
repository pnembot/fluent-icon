import type { SVGProps } from "react";

export function ArrowExpand(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 3a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V4.707l3.146 3.147a.5.5 0 1 0 .708-.708L4.707 4H7.5a.5.5 0 0 0 0-1h-4Zm0 14a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793l3.146-3.147a.5.5 0 0 1 .708.708L4.707 16H7.5a.5.5 0 0 1 0 1h-4ZM17 3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h2.793l-3.147 3.146a.5.5 0 0 0 .708.708L16 4.707V7.5a.5.5 0 0 0 1 0v-4ZM16.5 17a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.793l-3.146-3.147a.5.5 0 0 0-.708.708L15.293 16H12.5a.5.5 0 0 0 0 1h4Z"
      />
    </svg>
  );
}
export default ArrowExpand;
