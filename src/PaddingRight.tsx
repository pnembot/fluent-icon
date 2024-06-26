import type { SVGProps } from "react";

export function PaddingRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.854 9.854a.5.5 0 0 0 0-.708l-4.5-4.5a.5.5 0 0 0-.708.708L14.293 9H4.5a.5.5 0 0 0 0 1h9.793l-3.647 3.646a.5.5 0 0 0 .708.708l4.5-4.5ZM3 3.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12Zm15 0a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Zm0 3a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm0 4a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm0 4a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Z"
      />
    </svg>
  );
}
export default PaddingRight;
