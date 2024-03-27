import type { SVGProps } from "react";

export function SearchShieldFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 3a5.5 5.5 0 0 1 4.383 8.823l4.147 4.147a.75.75 0 0 1-.976 1.133l-.084-.073l-4.147-4.147c-.54.41-1.157.722-1.825.91l.002-.209V12.21a4.001 4.001 0 1 0-5.479-4.124c-.192.07-.372.186-.524.344a4.625 4.625 0 0 1-.952.776A5.5 5.5 0 0 1 8.5 3ZM7 10.347a4.633 4.633 0 0 1-1-.583a6.05 6.05 0 0 1-.716-.642a.389.389 0 0 0-.566 0c-.995 1.036-2.095 1.545-3.318 1.545c-.22 0-.4.186-.4.416v2.501l.004.266c.027.797.174 1.514.44 2.15A4.812 4.812 0 0 0 3 18c.524.4 1.15.727 1.875.979c.082.028.17.028.252 0C7.687 18.089 9 16.266 9 13.584v-2.5l-.008-.085a.405.405 0 0 0-.392-.332a4.057 4.057 0 0 1-1.6-.32Z"
      />
    </svg>
  );
}
export default SearchShieldFilled;
