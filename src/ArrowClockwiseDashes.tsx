import type { SVGProps } from "react";

export function ArrowClockwiseDashes(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.132 2.22a8.02 8.02 0 0 1 3.736 0a.5.5 0 0 1-.233.972a7.02 7.02 0 0 0-3.27 0a.5.5 0 1 1-.233-.973ZM6.507 3.342a.5.5 0 0 1-.165.687A7.039 7.039 0 0 0 4.03 6.342a.5.5 0 0 1-.852-.523A8.039 8.039 0 0 1 5.82 3.18a.5.5 0 0 1 .688.164Zm7.674-.165a.5.5 0 1 0-.523.852A7.04 7.04 0 0 1 15.745 6H12.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.208a8.035 8.035 0 0 0-1.82-1.53ZM2.822 7.762a.5.5 0 0 1 .37.603a7.02 7.02 0 0 0 0 3.27a.5.5 0 0 1-.973.233a8.02 8.02 0 0 1 0-3.736a.5.5 0 0 1 .603-.37ZM18 10v-.5a.5.5 0 0 0-1 0v.5a7.02 7.02 0 0 1-.192 1.635a.5.5 0 1 0 .973.233c.143-.6.219-1.225.219-1.868ZM3.343 13.493a.5.5 0 0 1 .687.165a7.038 7.038 0 0 0 2.312 2.312a.5.5 0 1 1-.523.852a8.038 8.038 0 0 1-2.64-2.641a.5.5 0 0 1 .164-.688Zm13.479.688a.5.5 0 0 0-.852-.523a7.037 7.037 0 0 1-2.313 2.312a.5.5 0 0 0 .524.852a8.037 8.037 0 0 0 2.64-2.641Zm-9.06 2.997a.5.5 0 0 1 .603-.37a7.02 7.02 0 0 0 3.27 0a.5.5 0 1 1 .233.973a8.02 8.02 0 0 1-3.736 0a.5.5 0 0 1-.37-.603Z"
      />
    </svg>
  );
}
export default ArrowClockwiseDashes;
