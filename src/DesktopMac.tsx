import type { SVGProps } from "react";

export function DesktopMac(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4v1a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1H7a1 1 0 0 0 1-1v-1H4a2 2 0 0 1-2-2V4Zm1 8v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1H3Zm14-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7h14Zm-5.732 6A1.99 1.99 0 0 1 11 16v-1H9v1c0 .364-.097.706-.268 1h2.536Z"
      />
    </svg>
  );
}
export default DesktopMac;
