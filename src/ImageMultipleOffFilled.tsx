import type { SVGProps } from "react";

export function ImageMultipleOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l1.409 1.408A2.98 2.98 0 0 0 3 6v6c0 .648.205 1.248.555 1.738l4.03-4.03a1.99 1.99 0 0 1 .897-.519l6.114 6.114A3.484 3.484 0 0 1 12.5 16H5.764c.55.614 1.348 1 2.236 1h4.5a4.481 4.481 0 0 0 2.809-.984l1.837 1.838a.5.5 0 0 0 .708-.708l-15-15Zm12.943 11.53l.764.764A4.482 4.482 0 0 0 17 12.5V8c0-.888-.386-1.687-1-2.236V12.5a3.557 3.557 0 0 1-.203 1.176ZM5.223 3.102l9.675 9.675c.067-.248.102-.508.102-.777V6a3 3 0 0 0-3-3H6c-.269 0-.53.035-.777.102ZM12.5 6.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm1.238 7.945l-4.03-4.03a1 1 0 0 0-1.415 0l-4.031 4.03c.49.35 1.09.555 1.738.555h6a2.98 2.98 0 0 0 1.738-.555Z"
      />
    </svg>
  );
}
export default ImageMultipleOffFilled;
