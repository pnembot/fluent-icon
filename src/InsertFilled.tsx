import type { SVGProps } from "react";

export function InsertFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm0 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2ZM2.5 9.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z"
      />
    </svg>
  );
}
export default InsertFilled;
