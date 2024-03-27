import type { SVGProps } from "react";

export function DocumentYml(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414v5.073a1.5 1.5 0 0 0-1-1.402V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v7.085a1.493 1.493 0 0 0-.748.582L4 12.045V4Zm7.5 3h3.293L11 3.207V6.5a.5.5 0 0 0 .5.5Zm-8 11a.5.5 0 0 0 .5-.5v-1.85l1.916-2.874a.5.5 0 0 0-.832-.555L3.5 14.6l-1.584-2.377a.5.5 0 0 0-.832.555L3 15.65v1.85a.5.5 0 0 0 .5.5Zm4.447-5.724A.5.5 0 0 0 7 12.5v5a.5.5 0 1 0 1 0v-2.882l1.553 3.105a.5.5 0 0 0 .894 0L12 14.618V17.5a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.947-.224L10 16.382l-2.053-4.106ZM15 12.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5h3a.5.5 0 1 0 0-1H15v-4.5Z"
      />
    </svg>
  );
}
export default DocumentYml;
