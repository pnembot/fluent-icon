import type { SVGProps } from "react";

export function CubeLink(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.043 6.296a.5.5 0 0 1 .66-.254L10 7.952l4.297-1.91a.5.5 0 1 1 .406.914L10.5 8.824V13.5a.5.5 0 0 1-1 0V8.824L5.297 6.956a.5.5 0 0 1-.254-.66ZM8.7 2.481a3.5 3.5 0 0 1 2.6 0l5.757 2.303c.57.227.943.779.943 1.392v5.859a3.538 3.538 0 0 0-.5-.036H17V6.176a.5.5 0 0 0-.314-.464L10.928 3.41a2.5 2.5 0 0 0-1.856 0L3.314 5.712A.5.5 0 0 0 3 6.176v7.646a.5.5 0 0 0 .314.465l5.758 2.303a2.5 2.5 0 0 0 1.16.167c.13.337.311.65.533.927a3.5 3.5 0 0 1-2.065-.166l-5.757-2.303A1.5 1.5 0 0 1 2 13.822V6.176a1.5 1.5 0 0 1 .943-1.392L8.7 2.48Zm4.8 10.518a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 1 0 0 1h.5a1.5 1.5 0 0 1 0 3H17a.5.5 0 1 0 0 1h.5a2.5 2.5 0 0 0 0-5H17Zm-3.5 2a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1h-4Z"
      />
    </svg>
  );
}
export default CubeLink;
