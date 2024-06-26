import type { SVGProps } from "react";

export function Person5Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm-3 7c0-1.113.903-2 2.009-2h7.577a1.516 1.516 0 0 0-.066.253l-.5 3A1.5 1.5 0 0 0 13.481 16a1.5 1.5 0 0 0-1.445 1.831c-.649.114-1.333.169-2.036.169c-1.855 0-3.583-.386-4.865-1.203C3.833 15.967 3 14.69 3 13Zm11-2a.5.5 0 0 0-.493.418l-.5 3a.5.5 0 0 0 .559.578l.08-.011l.217-.028a130.744 130.744 0 0 1 1.384-.171a13.804 13.804 0 0 1 .348-.034l.03-.002a1.625 1.625 0 0 1 0 3.25a2.56 2.56 0 0 1-1.002-.23c-.34-.153-.583-.35-.699-.535a.5.5 0 0 0-.848.53c.26.415.698.719 1.137.916c.446.2.953.319 1.412.319a2.625 2.625 0 0 0 0-5.25c-.095 0-.291.02-.489.042a59.762 59.762 0 0 0-1.032.126l.32-1.918H17.5a.5.5 0 0 0 0-1H14Z"
      />
    </svg>
  );
}
export default Person5Filled;
