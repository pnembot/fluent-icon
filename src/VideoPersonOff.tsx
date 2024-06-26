import type { SVGProps } from "react";

export function VideoPersonOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l1.16 1.159A1.5 1.5 0 0 0 2 5.5v9A1.5 1.5 0 0 0 3.5 16h11.793l1.853 1.854a.5.5 0 0 0 .708-.708l-15-15ZM12.293 13l.707.707V15H7v-1.5a.5.5 0 0 1 .5-.5h4.793Zm-1-1H7.5A1.5 1.5 0 0 0 6 13.5V15H3.5a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h.793l3.222 3.222a2.5 2.5 0 0 0 2.762 2.762L11.294 12ZM8.57 6.449l.726.726a1.5 1.5 0 0 1 2.029 2.029l.726.726a2.5 2.5 0 0 0-3.48-3.48ZM17 14.5a.498.498 0 0 1-.091.288l.71.71c.237-.265.381-.615.381-.998v-9A1.5 1.5 0 0 0 16.5 4H6.121l1 1H16.5a.5.5 0 0 1 .5.5v9Z"
      />
    </svg>
  );
}
export default VideoPersonOff;
