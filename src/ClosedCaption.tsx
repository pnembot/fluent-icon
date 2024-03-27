import type { SVGProps } from "react";

export function ClosedCaption(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.401 7.24a2.12 2.12 0 0 1 2.453.406a.5.5 0 0 1-.708.708a1.12 1.12 0 0 0-1.297-.22C6.437 8.342 6 8.886 6 10c0 1.115.437 1.66.849 1.865c.429.215.947.132 1.297-.219a.5.5 0 0 1 .708.707a2.12 2.12 0 0 1-2.453.407C5.563 12.34 5 11.385 5 10c0-1.385.563-2.34 1.401-2.76Zm7.953.406A2.12 2.12 0 0 0 11.9 7.24c-.837.42-1.4 1.375-1.4 2.76c0 1.385.563 2.34 1.401 2.76a2.12 2.12 0 0 0 2.453-.406a.5.5 0 0 0-.708-.707a1.12 1.12 0 0 1-1.297.218c-.412-.206-.849-.75-.849-1.865s.437-1.66.849-1.865a1.12 1.12 0 0 1 1.297.219a.5.5 0 0 0 .708-.708ZM2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm3-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5Z"
      />
    </svg>
  );
}
export default ClosedCaption;
