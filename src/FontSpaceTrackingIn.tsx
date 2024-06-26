import type { SVGProps } from "react";

export function FontSpaceTrackingIn(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.992 12.004a.5.5 0 0 0 .466-.32l3.508-9.02a.5.5 0 1 0-.931-.363l-3.043 7.823L9.95 2.301a.5.5 0 1 0-.932.363l3.508 9.02a.5.5 0 0 0 .466.32ZM7.47 2.3a.5.5 0 0 0-.932 0L4.204 8.305a.505.505 0 0 0-.009.021L3.03 11.322a.5.5 0 1 0 .932.363l1.046-2.688H9l1.046 2.688a.5.5 0 1 0 .932-.363L9.832 8.374a.496.496 0 0 0-.044-.114L7.47 2.301Zm1.142 5.696H5.397l1.607-4.135l1.608 4.135Zm-2.118 5.125a.5.5 0 1 0-.65.76l1.306 1.12H3.496a.5.5 0 0 0 0 1h3.651l-1.304 1.12a.5.5 0 1 0 .651.759l2.33-2.002a.5.5 0 0 0 0-.759l-2.33-1.998Zm7.713 4.705a.5.5 0 0 1-.706.054l-2.33-1.998a.5.5 0 0 1 0-.759l2.33-2.002a.5.5 0 1 1 .652.759L12.848 15H16.5a.5.5 0 1 1 0 1h-3.654l1.306 1.121a.5.5 0 0 1 .055.705Z"
      />
    </svg>
  );
}
export default FontSpaceTrackingIn;
