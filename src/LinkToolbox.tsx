import type { SVGProps } from "react";

export function LinkToolbox(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 4a.5.5 0 0 1 .09.992L8 5H6a3 3 0 0 0-.197 5.994L6 11h2a.5.5 0 0 1 .09.992L8 12H6a4 4 0 0 1-.22-7.994L6 4h2Zm6 0a4 4 0 0 1 3.48 5.974c-.21-.273-.475-.5-.779-.667a3 3 0 0 0-2.504-4.3L14 5h-2a.5.5 0 0 1-.09-.992L12 4h2ZM6 7.5h8a.5.5 0 0 1 .09.992L14 8.5H6a.5.5 0 0 1-.09-.992L6 7.5Zm6 4.5v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0Z"
      />
    </svg>
  );
}
export default LinkToolbox;
