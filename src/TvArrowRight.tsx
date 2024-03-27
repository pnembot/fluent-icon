import type { SVGProps } from "react";

export function TvArrowRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.147.354l.003-.003A.5.5 0 0 0 17 5.503v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L15.293 5H12.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2ZM17 13v-2.6a5.507 5.507 0 0 0 1-.657V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.207a5.48 5.48 0 0 0-.185 1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1ZM5 16.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default TvArrowRight;
