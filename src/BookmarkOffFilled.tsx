import type { SVGProps } from "react";

export function BookmarkOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m16 16.707l1.146 1.147a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 1 0-.708.708L4 4.707V17.5a.5.5 0 0 0 .794.404L10 14.118l5.206 3.786A.5.5 0 0 0 16 17.5v-.793ZM16 4.5v9.379L4.794 2.673A2.491 2.491 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5Z"
      />
    </svg>
  );
}
export default BookmarkOffFilled;
