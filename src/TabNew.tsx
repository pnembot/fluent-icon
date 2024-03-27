import type { SVGProps } from "react";

export function TabNew(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9zm0-7a2.5 2.5 0 0 1 2.495 2.336L17 5.5v4.1a5.468 5.468 0 0 0-.741-.313L16 9.207V5.5a1.5 1.5 0 0 0-1.356-1.493L14.5 4h-9a1.5 1.5 0 0 0-1.493 1.356L4 5.5v9a1.5 1.5 0 0 0 1.356 1.493L5.5 16h3.707c.074.261.167.515.277.76L9.6 17H5.5a2.5 2.5 0 0 1-2.495-2.336L3 14.5v-9a2.5 2.5 0 0 1 2.336-2.495L5.5 3h9zm0 9a.5.5 0 0 0-.492.41L14 12.5V14h-1.5a.5.5 0 0 0-.09.992l.09.008H14v1.5a.5.5 0 0 0 .992.09L15 16.5V15h1.5a.5.5 0 0 0 .09-.992L16.5 14H15v-1.5a.5.5 0 0 0-.5-.5z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
export default TabNew;
