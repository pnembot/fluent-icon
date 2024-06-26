import type { SVGProps } from "react";

export function LinkDismiss(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 4a.5.5 0 0 1 .09.992L8 5H6a3 3 0 0 0-.197 5.994L6 11h2a.5.5 0 0 1 .09.992L8 12H6a4 4 0 0 1-.22-7.994L6 4h2Zm6 0a4 4 0 0 1 3.52 5.902a5.49 5.49 0 0 0-.883-.471a3 3 0 0 0-2.44-4.424L14 5h-2a.5.5 0 0 1-.09-.992L12 4h2ZM6 7.5h8a.5.5 0 0 1 .09.992L14 8.5H6a.5.5 0 0 1-.09-.992L6 7.5Zm13 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.732-1.06a.5.5 0 0 0-.707-.708l-1.061 1.06l-1.06-1.06a.5.5 0 0 0-.708.707l1.06 1.061l-1.06 1.06a.5.5 0 0 0 .707.708l1.061-1.06l1.06 1.06a.5.5 0 0 0 .708-.707l-1.06-1.061l1.06-1.06Z"
      />
    </svg>
  );
}
export default LinkDismiss;
