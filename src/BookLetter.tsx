import type { SVGProps } from "react";

export function BookLetter(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8Zm-4 2c.2 0 .38.12.46.303l3 7a.5.5 0 0 1-.92.394L11.813 11H8.187l-.727 1.697a.5.5 0 0 1-.92-.394l3-7A.5.5 0 0 1 10 5Zm-1.385 5h2.77L10 6.77L8.615 10Z"
      />
    </svg>
  );
}
export default BookLetter;
