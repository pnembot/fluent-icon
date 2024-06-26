import type { SVGProps } from "react";

export function WindowShield(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h5.034a5.812 5.812 0 0 1-.712-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v1.232c.328.19.66.314 1 .379V5.5A2.5 2.5 0 0 0 14.5 3h-9Zm0 1h9A1.5 1.5 0 0 1 16 5.5V6H4v-.5A1.5 1.5 0 0 1 5.5 4ZM17 9.624a4.056 4.056 0 0 1-1-.277c-.606-.254-1.177-.662-1.716-1.225a.389.389 0 0 0-.566 0c-.995 1.036-2.095 1.545-3.318 1.545c-.22 0-.4.186-.4.416v2.501l.004.266c.042 1.247.38 2.3 1.006 3.15c.275.372.605.706.99 1c.523.4 1.148.727 1.873.979a.395.395 0 0 0 .254 0c2.56-.89 3.873-2.713 3.873-5.395v-2.5l-.008-.085a.405.405 0 0 0-.392-.332c-.203 0-.403-.014-.6-.043Z"
      />
    </svg>
  );
}
export default WindowShield;
