import type { SVGProps } from "react";

export function PremiumPerson(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3a.5.5 0 0 0-.429.243l-3 5a.5.5 0 0 0 .045.577l7.494 8.993a.5.5 0 0 0 .856-.132L13.842 9h3.892l.15-.18a.5.5 0 0 0 .045-.577l-3-5A.5.5 0 0 0 14.5 3h-9Zm7.27 6L10 16.12L7.231 9h5.538ZM3.382 8l2.4-4h1.979l-1.6 4H3.383Zm2.775 1l2.267 5.829L3.568 9h2.59Zm1.08-1l1.6-4h2.323l1.6 4H7.24Zm6.6 0l-1.6-4h1.979l2.4 4h-2.779Zm1.662 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 5c2.5 0 3.5-1.255 3.5-2.5a1.5 1.5 0 0 0-1.5-1.5h-4a1.5 1.5 0 0 0-1.5 1.5c0 1.25 1 2.5 3.5 2.5Z"
      />
    </svg>
  );
}
export default PremiumPerson;
