import type { SVGProps } from "react";

export function Document100Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v8.264a2.997 2.997 0 0 1 4.5.577A3 3 0 0 1 14 14v2c0 .768-.289 1.47-.764 2H14.5a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Zm-8 6.097c0-.199-.1-.348-.202-.437a.642.642 0 0 0-.298-.142c-.133-.025-.5-.03-.669.319c-.2.413-.544.931-1.074 1.226a.5.5 0 1 0 .486.874A3.19 3.19 0 0 0 2 13.845V17.5a.5.5 0 0 0 1 0v-4.903ZM4 14a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2Zm2-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1Zm5-1a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0v-2a2 2 0 0 0-2-2Zm-1 2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Z"
      />
    </svg>
  );
}
export default Document100Filled;
