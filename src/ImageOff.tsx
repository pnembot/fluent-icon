import type { SVGProps } from "react";

export function ImageOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l1.409 1.408A2.98 2.98 0 0 0 3 6v8a3 3 0 0 0 3 3h8a2.98 2.98 0 0 0 1.738-.555l1.408 1.409a.5.5 0 0 0 .708-.708l-15-15Zm6.56 7.975a1.497 1.497 0 0 0-.465.311l-4.67 4.588A1.99 1.99 0 0 1 4 14V6c0-.37.101-.718.277-1.016l5.137 5.137ZM6 16c-.37 0-.715-.1-1.012-.274l4.662-4.58a.5.5 0 0 1 .7 0l4.662 4.58A1.991 1.991 0 0 1 14 16H6ZM16 6v7.879l.898.898c.067-.248.102-.508.102-.777V6a3 3 0 0 0-3-3H6c-.269 0-.53.035-.777.102L6.12 4H14a2 2 0 0 1 2 2Zm-2 1.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Zm-1 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"
      />
    </svg>
  );
}
export default ImageOff;
