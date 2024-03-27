import type { SVGProps } from "react";

export function CalligraphyPenQuestionMarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="currentColor">
        <path d="M14.5 1a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Zm.624 7.005a.625.625 0 1 0-1.249 0a.625.625 0 0 0 1.25 0Zm1.23-3.552c0-1.104-.823-1.95-1.854-1.95c-1.048 0-1.864.818-1.853 1.955a.5.5 0 1 0 1-.01c-.006-.579.36-.945.853-.945c.472 0 .853.392.853.95c0 .202-.07.315-.36.544l-.277.215C14.21 5.616 14 5.929 14 6.5a.5.5 0 0 0 .992.09l.011-.156c.017-.148.1-.254.346-.448l.277-.215c.513-.41.727-.732.727-1.318ZM14.5 11c.112 0 .224-.003.335-.01a2.5 2.5 0 0 1-.198.425l-3.463 5.907a1.372 1.372 0 0 1-.674.58v-7.036a1 1 0 0 0 .456-1.16A5.478 5.478 0 0 0 14.5 11Z" />
        <path d="M9 5.5c0 1.35.486 2.587 1.294 3.544a1 1 0 0 0-.794 1.822v7.044a1.372 1.372 0 0 1-.694-.588l-3.463-5.907a2.5 2.5 0 0 1-.102-2.335L6.7 6h-.2A1.5 1.5 0 0 1 5 4.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 0 .5.5h2.522A5.57 5.57 0 0 0 9 5.5Z" />
      </g>
    </svg>
  );
}
export default CalligraphyPenQuestionMarkFilled;
