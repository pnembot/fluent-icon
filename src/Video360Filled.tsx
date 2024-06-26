import type { SVGProps } from "react";

export function Video360Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.97 4.02A1.699 1.699 0 0 0 2 5.697v8.605a1.7 1.7 0 0 0 1.97 1.677a37.86 37.86 0 0 1 12.061 0A1.7 1.7 0 0 0 18 14.302V5.697a1.699 1.699 0 0 0-1.97-1.677a37.863 37.863 0 0 1-12.062 0ZM16 14.962a38.82 38.82 0 0 0-3-.35v-2.613h2a1 1 0 0 1 1 1v1.963Zm-4-.415a38.842 38.842 0 0 0-4 0V12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2.548Zm-5 .065a38.819 38.819 0 0 0-3 .35v-1.963a1 1 0 0 1 1-1h2v2.613ZM10 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm-3.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm9 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
      />
    </svg>
  );
}
export default Video360Filled;
