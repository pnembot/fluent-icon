import type { SVGProps } from "react";

export function BookmarkMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.268 3A2 2 0 0 1 8 2h4.5A3.5 3.5 0 0 1 16 5.5v10a.5.5 0 0 1-.777.416L15 15.768V5.5A2.5 2.5 0 0 0 12.5 3H6.268ZM6 4a2 2 0 0 0-2 2v11.5a.5.5 0 0 0 .777.416L9 15.101l4.223 2.815A.5.5 0 0 0 14 17.5V6a2 2 0 0 0-2-2H6Z"
      />
    </svg>
  );
}
export default BookmarkMultipleFilled;
