import type { SVGProps } from "react";

export function ShiftsQuestionMark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v3.6a5.463 5.463 0 0 1 1-.393V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.207c-.099.349-.23.683-.393 1H14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm5 3.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H11V6.5Zm-1 8a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4.5 1.88a.625.625 0 1 0 0 1.25a.625.625 0 0 0 0-1.25Zm0-4.877c-1.048 0-1.864.818-1.853 1.955a.5.5 0 1 0 1-.01c-.006-.579.36-.945.853-.945c.472 0 .853.392.853.95c0 .202-.07.315-.36.544l-.277.215C5.21 14.616 5 14.929 5 15.5a.5.5 0 0 0 .992.09l.011-.156c.017-.148.1-.254.346-.448l.277-.215c.513-.41.727-.732.727-1.318c0-1.104-.822-1.95-1.853-1.95Z"
      />
    </svg>
  );
}
export default ShiftsQuestionMark;
