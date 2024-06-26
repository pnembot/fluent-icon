import type { SVGProps } from "react";

export function VideoPersonCall(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 11a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm0-1a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3ZM2 5.5A1.5 1.5 0 0 1 3.5 4h13A1.5 1.5 0 0 1 18 5.5v2.685a2.298 2.298 0 0 0-1-.183V5.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H6v-1.5A1.5 1.5 0 0 1 7.5 12h5a1.5 1.5 0 0 1 1.5 1.5v.22a2.066 2.066 0 0 0-1 .077V13.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V15h4.556c-.26.297-.429.642-.506 1H3.5A1.5 1.5 0 0 1 2 14.5v-9Zm13.584 5.082l.283-.75c.258-.681 1.062-1.017 1.74-.728l.388.166c.473.202.864.568.947 1.06c.457 2.725-1.908 6.601-4.63 7.59c-.492.178-1.023.04-1.445-.246l-.346-.235a1.184 1.184 0 0 1-.204-1.79l.545-.607a1.066 1.066 0 0 1 1.034-.323l1.225.29c.971-.607 1.492-1.46 1.562-2.56l-.878-.859a.937.937 0 0 1-.221-1.008Z"
      />
    </svg>
  );
}
export default VideoPersonCall;
