import type { SVGProps } from "react";

export function FilterSyncFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 5.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.468a1.982 1.982 0 0 0-.933-.25a2 2 0 0 0-1.45.586a.5.5 0 1 1-.706-.707A3 3 0 0 1 16 3.152V3a.5.5 0 0 1 .5-.5Zm-.876 5.532A3 3 0 0 1 13 7.848V8a.5.5 0 0 1-1 0V6.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-.468a1.982 1.982 0 0 0 .933.25a2 2 0 0 0 1.45-.586a.5.5 0 1 1 .706.707a3 3 0 0 1-.997.66ZM14 10.977a5.464 5.464 0 0 1-2.274-.727H4.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 .75-.773ZM9.375 7.5A5.468 5.468 0 0 1 9.022 6H2.75a.75.75 0 0 0 0 1.5h6.625Zm1.875 7a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h4.5Z"
      />
    </svg>
  );
}
export default FilterSyncFilled;
