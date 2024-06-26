import type { SVGProps } from "react";

export function PageFit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 6A1.5 1.5 0 0 0 4 7.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 0-1h-1Zm8 0a.5.5 0 0 0 0 1h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 1 0v-1A1.5 1.5 0 0 0 14.5 6h-1ZM5 11.5a.5.5 0 0 0-1 0v1A1.5 1.5 0 0 0 5.5 14h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 1-.5-.5v-1Zm11 0a.5.5 0 0 0-1 0v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h1a1.5 1.5 0 0 0 1.5-1.5v-1ZM2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm1 0v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Zm2.5 0A1.5 1.5 0 0 0 4 7.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 0-1h-1ZM5 11.5a.5.5 0 0 0-1 0v1A1.5 1.5 0 0 0 5.5 14h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 1-.5-.5v-1Z"
      />
    </svg>
  );
}
export default PageFit;
