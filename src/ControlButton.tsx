import type { SVGProps } from "react";

export function ControlButton(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H6Zm3 .5a.5.5 0 0 0-1 0V9h-.5a.5.5 0 0 0 0 1H8v1.75c0 .69.56 1.25 1.25 1.25h.25a.5.5 0 0 0 0-1h-.25a.25.25 0 0 1-.25-.25V10h.5a.5.5 0 0 0 0-1H9V7.5Zm7 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5Zm-4 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 0-1h-1a1.5 1.5 0 0 0-1.5 1.5v2a.5.5 0 0 0 1 0v-2ZM4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4H4.75ZM3 6.75C3 5.784 3.784 5 4.75 5h10.5c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 15.25 15H4.75A1.75 1.75 0 0 1 3 13.25v-6.5Z"
      />
    </svg>
  );
}
export default ControlButton;
