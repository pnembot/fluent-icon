import type { SVGProps } from "react";

export function TabInprivateAccount(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.66a3.522 3.522 0 0 1-.16-1H5.5A1.5 1.5 0 0 1 4 14.5v-9A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5v1.645c.361.107.698.272 1 .482V5.5A2.5 2.5 0 0 0 14.5 3h-9Zm8 7.5A1.5 1.5 0 0 0 15 12h2a2.5 2.5 0 1 1 0-3h-2a1.5 1.5 0 0 0-1.5 1.5Zm-1.319 4.693c.12-.133.254-.193.369-.193h6.317a1.779 1.779 0 0 0-.3-.471c-.262-.294-.652-.529-1.117-.529h-4.9c-.465 0-.855.235-1.116.529c-.26.291-.434.686-.434 1.091v.32c0 1.634 1.633 3.06 4 3.06c1.24 0 2.28-.392 2.988-1H15c-2.03 0-3-1.171-3-2.06v-.32c0-.125.06-.29.181-.427ZM17.5 10.5c0 .171-.017.338-.05.5H15v-1h2.45c.033.162.05.329.05.5Zm1.261 6.5H15v-1h4c-.01.347-.091.685-.239 1Z"
      />
    </svg>
  );
}
export default TabInprivateAccount;
