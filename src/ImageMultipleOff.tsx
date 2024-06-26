import type { SVGProps } from "react";

export function ImageMultipleOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l1.409 1.408A2.98 2.98 0 0 0 3 6v6a3 3 0 0 0 3 3h6a2.98 2.98 0 0 0 1.738-.555l.858.858A3.484 3.484 0 0 1 12.5 16H5.764c.55.614 1.348 1 2.236 1h4.5a4.481 4.481 0 0 0 2.809-.984l1.837 1.838a.5.5 0 0 0 .708-.708l-15-15ZM8.482 9.19a1.99 1.99 0 0 0-.896.518l-3.31 3.309A1.99 1.99 0 0 1 4 12V6c0-.37.101-.718.277-1.016l4.205 4.205ZM14 6v5.879l.898.898c.067-.248.102-.508.102-.777V6a3 3 0 0 0-3-3H6c-.269 0-.53.035-.777.102L6.12 4H12a2 2 0 0 1 2 2Zm1.797 7.676l.764.764A4.482 4.482 0 0 0 17 12.5V8c0-.888-.386-1.687-1-2.236V12.5a3.557 3.557 0 0 1-.203 1.176ZM11.5 7.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-1.793 2.914l3.309 3.31A1.991 1.991 0 0 1 12 14H6c-.37 0-.718-.101-1.016-.277l3.309-3.309a1 1 0 0 1 1.414 0Z"
      />
    </svg>
  );
}
export default ImageMultipleOff;
