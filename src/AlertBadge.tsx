import type { SVGProps } from "react";

export function AlertBadge(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.998 2c1.09 0 2.113.28 2.995.77a3.012 3.012 0 0 0-.63.797A5.162 5.162 0 0 0 9.999 3c-2.623 0-4.77 1.924-4.98 4.385l-.014.212L5 7.802V11.5l-.038.192l-.963 2.313l11.958.002l.045-.002l-.963-2.313L15 11.5V8c.351 0 .688-.06 1-.17v3.568l.925 2.222c.022.054.04.11.053.167l.015.086l.009.132a1 1 0 0 1-.75.963l-.116.027l-.134.01l-3.502-.001l-.005.161a2.5 2.5 0 0 1-4.99 0l-.005-.161H4a.998.998 0 0 1-.26-.034l-.125-.042a1 1 0 0 1-.603-1.052l.022-.128l.042-.128l.923-2.219L4 7.793l.005-.225C4.127 4.451 6.77 2 9.998 2ZM11.5 15.004h-3l.007.141a1.5 1.5 0 0 0 1.349 1.348L10 16.5a1.5 1.5 0 0 0 1.493-1.355l.007-.141Zm1.707-10.89c.15-.305.376-.565.653-.757a2 2 0 1 1-.653.757Z"
      />
    </svg>
  );
}
export default AlertBadge;
