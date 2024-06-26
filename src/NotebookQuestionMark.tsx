import type { SVGProps } from "react";

export function NotebookQuestionMark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2a2 2 0 0 0-2 2v5.6a5.463 5.463 0 0 1 1-.393V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2.6a5.507 5.507 0 0 1-.657 1H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm0 3.5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5ZM6 6h6v1H6V6Zm10 0h.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5H16V6Zm0 3.5h.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm0 3.5h.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H16V13Zm-6 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4.5 1.88a.625.625 0 1 0 0 1.25a.625.625 0 0 0 0-1.25Zm0-4.877c-1.048 0-1.864.818-1.853 1.955a.5.5 0 1 0 1-.01c-.006-.579.36-.945.853-.945c.472 0 .853.392.853.95c0 .202-.07.315-.36.544l-.277.215C5.21 14.616 5 14.929 5 15.5a.5.5 0 0 0 .992.09l.011-.156c.017-.148.1-.254.346-.448l.277-.215c.513-.41.727-.732.727-1.318c0-1.104-.822-1.95-1.853-1.95Z"
      />
    </svg>
  );
}
export default NotebookQuestionMark;
