import type { SVGProps } from "react";

export function SearchShield(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 3a5.5 5.5 0 0 1 4.227 9.02l4.127 4.126a.5.5 0 0 1-.638.765l-.07-.057l-4.126-4.127a5.488 5.488 0 0 1-2.022 1.067l.002-.21v-.84A4.502 4.502 0 0 0 8.5 4A4.5 4.5 0 0 0 4 8.425l-.003.004a4.625 4.625 0 0 1-.952.776A5.5 5.5 0 0 1 8.5 3ZM7 10.347a4.633 4.633 0 0 1-1-.583a6.05 6.05 0 0 1-.716-.642a.389.389 0 0 0-.566 0c-.995 1.036-2.095 1.545-3.318 1.545c-.22 0-.4.186-.4.416v2.501l.004.266c.027.797.174 1.514.44 2.15A4.812 4.812 0 0 0 3 18c.524.4 1.15.727 1.875.979c.082.028.17.028.252 0C7.687 18.089 9 16.266 9 13.584v-2.5l-.008-.085a.405.405 0 0 0-.392-.332a4.057 4.057 0 0 1-1.6-.32Z"
      />
    </svg>
  );
}
export default SearchShield;
