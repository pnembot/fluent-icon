import type { SVGProps } from "react";

export function ArrowCounterclockwiseDashes(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.868 2.22a8.02 8.02 0 0 0-3.736 0a.5.5 0 1 0 .233.972a7.02 7.02 0 0 1 3.27 0a.5.5 0 0 0 .233-.973Zm1.625 1.123a.5.5 0 0 0 .165.687a7.038 7.038 0 0 1 2.312 2.312a.5.5 0 1 0 .852-.523a8.038 8.038 0 0 0-2.641-2.64a.5.5 0 0 0-.688.164ZM5.82 3.178a.5.5 0 1 1 .523.852A7.04 7.04 0 0 0 4.255 6H7.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.208a8.037 8.037 0 0 1 1.82-1.53Zm11.359 4.584a.5.5 0 0 0-.37.603a7.02 7.02 0 0 1 0 3.27a.5.5 0 1 0 .973.233a8.02 8.02 0 0 0 0-3.736a.5.5 0 0 0-.603-.37ZM2 10v-.5a.5.5 0 0 1 1 0v.5c0 .564.067 1.111.192 1.635a.5.5 0 0 1-.973.233A8.02 8.02 0 0 1 2 10Zm14.657 3.493a.5.5 0 0 0-.687.165a7.037 7.037 0 0 1-2.313 2.312a.5.5 0 0 0 .524.852a8.037 8.037 0 0 0 2.64-2.641a.5.5 0 0 0-.164-.688Zm-13.479.688a.5.5 0 1 1 .852-.523a7.038 7.038 0 0 0 2.312 2.312a.5.5 0 1 1-.523.852a8.038 8.038 0 0 1-2.64-2.641Zm9.06 2.997a.5.5 0 0 0-.603-.37a7.02 7.02 0 0 1-3.27 0a.5.5 0 1 0-.233.973a8.02 8.02 0 0 0 3.736 0a.5.5 0 0 0 .37-.603Z"
      />
    </svg>
  );
}
export default ArrowCounterclockwiseDashes;
