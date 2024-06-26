import type { SVGProps } from "react";

export function HomeSplitFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.003 2.381a1.5 1.5 0 0 0-2.006 0l-5.5 4.95A1.5 1.5 0 0 0 3 8.446V15.5A1.5 1.5 0 0 0 4.5 17h11a1.5 1.5 0 0 0 1.5-1.5V8.446a1.5 1.5 0 0 0-.497-1.115l-5.5-4.95Zm-.503 11.12v1a.5.5 0 0 1-1 0v-1a.5.5 0 1 1 1 0ZM10 9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 10 9Zm.5-3.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0Z"
      />
    </svg>
  );
}
export default HomeSplitFilled;
