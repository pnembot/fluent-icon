import type { SVGProps } from "react";

export function Document100(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2h-.764c.258-.288.462-.627.593-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v7.17a2.997 2.997 0 0 0-1 .594V4Zm7.5 3h3.293L11 3.207V6.5a.5.5 0 0 0 .5.5ZM6 12a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0v-2a2 2 0 0 0-2-2Zm-1 2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Zm-2-1.403c0-.199-.1-.348-.202-.437a.642.642 0 0 0-.298-.142c-.133-.025-.5-.03-.669.319c-.2.413-.544.931-1.074 1.226a.5.5 0 1 0 .486.874A3.19 3.19 0 0 0 2 13.845V17.5a.5.5 0 0 0 1 0v-4.903ZM9 14a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2Zm2-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
}
export default Document100;
