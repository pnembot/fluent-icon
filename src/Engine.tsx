import type { SVGProps } from "react";

export function Engine(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 3a.5.5 0 0 0-1 0v1H6a2 2 0 0 0-2 2v3H3V6.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V10h1v2.879a2 2 0 0 0 .586 1.414L7 16.707a1 1 0 0 0 .707.293h5.484a1 1 0 0 0 .894-.553L14.81 15H16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1.191l-.724-1.447A1 1 0 0 0 13.191 4H11V3a.5.5 0 0 0-1 0v1H8V3ZM6 5h7.191l.724 1.447a1 1 0 0 0 .894.553H16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1.191a1 1 0 0 0-.894.553L13.19 16H7.707l-2.414-2.414A1 1 0 0 1 5 12.879V6a1 1 0 0 1 1-1Zm1.5 2a.5.5 0 0 1 .5.5V10a1 1 0 0 0 1 1h1V7.5a.5.5 0 0 1 1 0V11h3.5a.5.5 0 0 1 0 1H9a2 2 0 0 1-2-2V7.5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default Engine;
