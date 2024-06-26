import type { SVGProps } from "react";

export function GroupFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 4.5c0 .356-.074.694-.208 1H10a.5.5 0 0 1 .5.5v2H10a2 2 0 0 0-2 2v.5H6a.5.5 0 0 1-.5-.5V6.792A2.492 2.492 0 0 1 4 6.95V10a2 2 0 0 0 2 2h2v2a2 2 0 0 0 2 2h3.05a2.512 2.512 0 0 1 .158-1.5H10a.5.5 0 0 1-.5-.5v-2h.5a2 2 0 0 0 2-2v-.5h2a.5.5 0 0 1 .5.5v3.208a2.491 2.491 0 0 1 1.5-.158V10a2 2 0 0 0-2-2h-2V6a2 2 0 0 0-2-2H6.95c.033.162.05.329.05.5Zm3.5 5v.5a.5.5 0 0 1-.5.5h-.5V10a.5.5 0 0 1 .5-.5h.5ZM6 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm11 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm0-11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-11 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  );
}
export default GroupFilled;
