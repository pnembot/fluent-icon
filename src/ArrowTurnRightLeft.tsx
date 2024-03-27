import type { SVGProps } from "react";

export function ArrowTurnRightLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.004 14.566a.501.501 0 0 0 .31.4l5 1.998a.5.5 0 1 0 .372-.928L5.848 14.5l11.524-4.59c.828-.329.844-1.495.025-1.847L5.697 3.04a.5.5 0 0 0-.394.919l11.7 5.023L5.534 13.55l1.912-3.826a.5.5 0 1 0-.894-.447l-2.49 4.982a.5.5 0 0 0-.059.307Z"
      />
    </svg>
  );
}
export default ArrowTurnRightLeft;
