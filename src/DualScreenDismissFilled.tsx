import type { SVGProps } from "react";

export function DualScreenDismissFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.646-1.146a.5.5 0 0 0-.708-.708L14.5 4.793l-1.146-1.147a.5.5 0 0 0-.708.708L13.793 5.5l-1.147 1.146a.5.5 0 0 0 .708.708L14.5 6.207l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 5.5l1.147-1.146ZM14.5 11c1.33 0 2.55-.472 3.5-1.257V16a2 2 0 0 1-2 2h-5.5V9.275a5.485 5.485 0 0 0 4 1.725Zm-5-3.206A5.466 5.466 0 0 1 9.022 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.5V7.794ZM6 15.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"
      />
    </svg>
  );
}
export default DualScreenDismissFilled;
