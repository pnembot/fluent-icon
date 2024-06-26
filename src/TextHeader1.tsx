import type { SVGProps } from "react";

export function TextHeader1(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.553 4.003a.497.497 0 0 1 .447.506V15.5a.5.5 0 0 1-1 0V6.732a8.576 8.576 0 0 1-2.223 2.184a.5.5 0 1 1-.554-.832c1.415-.943 2.517-2.467 2.787-3.682a.5.5 0 0 1 .543-.4ZM2.5 4a.5.5 0 0 1 .5.5V9h6V4.5a.5.5 0 1 1 1 0v11a.5.5 0 0 1-1 0V10H3v5.5a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default TextHeader1;
