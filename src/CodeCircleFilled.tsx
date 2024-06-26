import type { SVGProps } from "react";

export function CodeCircleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0Zm9.958-3.8a.5.5 0 1 0-.916-.4l-3.5 8a.5.5 0 1 0 .916.4l3.5-8ZM6.854 7.646a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.207 10l1.647-1.646a.5.5 0 0 0 0-.708Zm6.292.708L14.793 10l-1.647 1.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708Z"
      />
    </svg>
  );
}
export default CodeCircleFilled;
