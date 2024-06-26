import type { SVGProps } from "react";

export function DualScreenVibrateFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.5 15H13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2.5v10Zm-1-10H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5V5Zm2.5 7.5a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5ZM7 12h.5a.5.5 0 0 1 0 1H7a.5.5 0 0 1 0-1ZM1.877 6.515a.5.5 0 0 1 .606.364l.41 1.64a1.5 1.5 0 0 1-.113 1.035l-.611 1.222a.5.5 0 0 0 0 .448l.776 1.552a.5.5 0 1 1-.894.448l-.776-1.553a1.5 1.5 0 0 1 0-1.342l.61-1.222a.5.5 0 0 0 .038-.345l-.41-1.64a.5.5 0 0 1 .364-.607Zm16.606.364a.5.5 0 0 0-.97.242l.41 1.641a.5.5 0 0 1-.037.345l-.611 1.222a1.5 1.5 0 0 0 0 1.342l.776 1.553a.5.5 0 1 0 .894-.448l-.776-1.552a.5.5 0 0 1 0-.448l.61-1.222c.161-.32.201-.687.114-1.034l-.41-1.641Z"
      />
    </svg>
  );
}
export default DualScreenVibrateFilled;
