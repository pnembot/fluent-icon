import type { SVGProps } from "react";

export function SpeakerOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L5.293 6H3.5A1.5 1.5 0 0 0 2 7.5v5A1.5 1.5 0 0 0 3.5 14h2.607a.5.5 0 0 1 .34.133l3.873 3.594c.64.594 1.68.14 1.68-.733v-4.287l5.146 5.147a.5.5 0 0 0 .708-.708l-2.565-2.564L2.854 2.146Zm13.106 2.52a8.004 8.004 0 0 1 .656 9.83l-.721-.723a7.004 7.004 0 0 0-.68-8.44a.5.5 0 1 1 .745-.667Zm-1.2 2.584a5.498 5.498 0 0 1 .041 5.43l-.742-.742a4.495 4.495 0 0 0-.165-4.188a.5.5 0 1 1 .866-.5ZM12 3.006V9.88L7.246 5.125l3.074-2.852c.64-.594 1.68-.14 1.68.733Z"
      />
    </svg>
  );
}
export default SpeakerOffFilled;
