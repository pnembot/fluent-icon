import type { SVGProps } from "react";

export function ArrowLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.159 16.867a.5.5 0 1 0 .674-.739l-6.168-5.63h13.831a.5.5 0 0 0 0-1H3.668l6.165-5.629a.5.5 0 0 0-.674-.738L2.243 9.445a.746.746 0 0 0-.24.631a.746.746 0 0 0 .24.477l6.916 6.314Z"
      />
    </svg>
  );
}
export default ArrowLeft;
