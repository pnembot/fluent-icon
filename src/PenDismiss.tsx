import type { SVGProps } from "react";

export function PenDismiss(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.18 2.926a2.975 2.975 0 0 0-4.26-.054l-9.375 9.375a2.437 2.437 0 0 0-.655 1.195l-.878 3.95a.5.5 0 0 0 .597.596l3.926-.873a2.519 2.519 0 0 0 1.234-.677L8.207 16a5.49 5.49 0 0 1-.2-1.215l-.945.945a1.518 1.518 0 0 1-.744.409l-3.16.703l.708-3.183a1.43 1.43 0 0 1 .387-.705l9.374-9.374a1.975 1.975 0 0 1 2.793 2.792l-2.635 2.635c.419.022.825.09 1.215.2l2.127-2.128a2.975 2.975 0 0 0 .052-4.153ZM18 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.646-1.146a.5.5 0 0 0-.708-.708L13.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L14.207 14.5l1.147-1.146Z"
      />
    </svg>
  );
}
export default PenDismiss;
