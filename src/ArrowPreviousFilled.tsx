import type { SVGProps } from "react";

export function ArrowPreviousFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 4.75a.75.75 0 0 0-.743.648L5.25 5.5v9a.75.75 0 0 0 1.493.102l.007-.102v-9A.75.75 0 0 0 6 4.75Zm8.28.22a.75.75 0 0 0-.976-.073l-.084.073l-4.5 4.5a.75.75 0 0 0-.073.976l.073.084l4.5 4.5a.75.75 0 0 0 1.133-.976l-.073-.084L10.31 10l3.97-3.97a.75.75 0 0 0 0-1.06Z"
      />
    </svg>
  );
}
export default ArrowPreviousFilled;
