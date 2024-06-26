import type { SVGProps } from "react";

export function PeopleSearch(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm7.865 10.797c-1.071.683-2.454 1.064-3.962 1.171a1.497 1.497 0 0 0-.342-.529l-.44-.44c1.685-.016 3.16-.379 4.206-1.046C15.377 15.283 16 14.31 16 13a1 1 0 0 0-1-1H8.744a4.485 4.485 0 0 0-.502-1H15a2 2 0 0 1 2 2c0 1.691-.833 2.966-2.135 3.797ZM4.5 17c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}
export default PeopleSearch;
