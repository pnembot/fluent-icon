import type { SVGProps } from "react";

export function VoteFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.5 9h-1.268l1.732-3a1 1 0 0 0-.366-1.366L11 3.134a1 1 0 0 0-1.366.366l-2.5 4.33A1 1 0 0 0 7.257 9H6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1Zm-3-5l2.598 1.5l-2.02 3.5H9.16L8 8.33L10.5 4Zm4.037 3l-.577 1h.54l2.25 3H3.25L5.5 8h.406a.961.961 0 0 1 .078-.17l.48-.83H5.5a1 1 0 0 0-.8.4l-2.5 3.333a1 1 0 0 0-.2.6V16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.667a1 1 0 0 0-.2-.6L15.3 7.4a1 1 0 0 0-.763-.4Z"
      />
    </svg>
  );
}
export default VoteFilled;
