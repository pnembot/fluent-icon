import type { SVGProps } from "react";

export function MidiFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.5 4a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-15Zm.5 6h2v3.5a.5.5 0 0 0 1 0V10h2v3.5a.5.5 0 0 0 1 0V10h2v3.5a.5.5 0 0 0 1 0V10h2v3.5a.5.5 0 0 0 1 0V10h2v5H3v-5Zm2.75-2.5a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Zm6.25-1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-3 .251a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
}
export default MidiFilled;
