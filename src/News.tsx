import type { SVGProps } from "react";

export function News(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM10.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-.5 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM5.5 9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Zm.5 3v-2h2v2H6ZM2 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a2 2 0 0 1 2 2v5.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5V5Zm13 0a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8.5A1.5 1.5 0 0 0 4.5 15h11a1.5 1.5 0 0 0 1.5-1.5V8a1 1 0 0 0-1-1v6.5a.5.5 0 0 1-1 0V5Z"
      />
    </svg>
  );
}
export default News;
