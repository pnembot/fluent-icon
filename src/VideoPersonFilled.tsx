import type { SVGProps } from "react";

export function VideoPersonFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.5 8.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0ZM2 5.5A1.5 1.5 0 0 1 3.5 4h13A1.5 1.5 0 0 1 18 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5v-9ZM14 15h2.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H6v-1.5A1.5 1.5 0 0 1 7.5 12h5a1.5 1.5 0 0 1 1.5 1.5V15Z"
      />
    </svg>
  );
}
export default VideoPersonFilled;
