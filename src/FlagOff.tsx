import type { SVGProps } from "react";

export function FlagOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L3.5 4.207V17.5a.5.5 0 0 0 1 0V13h7.793l4.853 4.854a.5.5 0 0 0 .708-.708L3.765 3.058l-.911-.912ZM11.293 12H4.5V5.207L11.293 12Zm3.273 0h-.445l1 1h.379a.5.5 0 0 0 .416-.777L13.101 8l2.815-4.223A.5.5 0 0 0 15.5 3H5.121l1 1h8.445l-2.482 3.723a.5.5 0 0 0 0 .554L14.566 12Z"
      />
    </svg>
  );
}
export default FlagOff;
