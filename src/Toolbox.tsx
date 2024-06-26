import type { SVGProps } from "react";

export function Toolbox(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 4.5V6H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12.003a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H14V4.5A1.5 1.5 0 0 0 12.5 3h-5A1.5 1.5 0 0 0 6 4.5ZM7.5 4h5a.5.5 0 0 1 .5.5V6H7V4.5a.5.5 0 0 1 .5-.5ZM4 7h12.003a1 1 0 0 1 1 1v2H14v-.5a.5.5 0 0 0-1 0v.5H7v-.5a.5.5 0 0 0-1 0v.5H3V8a1 1 0 0 1 1-1Zm9 4v.5a.5.5 0 0 0 1 0V11h3.003v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4h3v.5a.5.5 0 0 0 1 0V11h6Z"
      />
    </svg>
  );
}
export default Toolbox;
