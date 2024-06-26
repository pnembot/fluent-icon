import type { SVGProps } from "react";

export function OpenOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m2.854 2.146l15 15a.5.5 0 0 1-.708.708l-1.408-1.409A2.98 2.98 0 0 1 14 17H6a3 3 0 0 1-3-3V6c0-.648.205-1.248.555-1.738L2.146 2.854a.5.5 0 1 1 .708-.708Zm12.162 13.577L4.276 4.984A1.99 1.99 0 0 0 4 6v8a2 2 0 0 0 2 2h8c.37 0 .718-.101 1.016-.277Zm1.882-.946L16 13.88V11.5a.5.5 0 0 1 1 0V14c0 .269-.035.53-.102.777ZM5.223 3.102L6.121 4H8.5a.5.5 0 0 0 0-1H6c-.269 0-.53.035-.777.102ZM11 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.707l-4.146 4.147a.5.5 0 0 1-.708-.708L15.293 4H11.5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default OpenOff;
