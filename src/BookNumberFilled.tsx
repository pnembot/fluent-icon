import type { SVGProps } from "react";

export function BookNumberFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.61 8.005h.982l-.2 1H9.41l.2-1ZM6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.504a.5.5 0 1 0 0-1H6a1 1 0 0 1-1-.999h10.504a.5.5 0 0 0 .5-.5V4a2 2 0 0 0-2-2H6Zm5.599 3.511a.5.5 0 0 1 .392.588l-.18.906h.94a.5.5 0 0 1 0 1h-1.14l-.2 1h1.09a.5.5 0 1 1 0 1h-1.289l-.218 1.093a.5.5 0 0 1-.98-.196l.178-.897H9.21l-.219 1.093a.5.5 0 1 1-.98-.196l.18-.897h-.938a.5.5 0 0 1 0-1H8.39l.2-1H7.5a.5.5 0 0 1 0-1h1.29l.221-1.102a.5.5 0 0 1 .98.197l-.18.905h.98l.22-1.101a.5.5 0 0 1 .588-.393Z"
      />
    </svg>
  );
}
export default BookNumberFilled;
