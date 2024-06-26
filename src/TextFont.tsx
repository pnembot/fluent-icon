import type { SVGProps } from "react";

export function TextFont(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a.5.5 0 0 1 .467.319l2.43 6.25a.482.482 0 0 1 .009.022l.17.437l-.527 1.404l-.456-1.17H3.907l-.94 2.42a.5.5 0 1 1-.933-.363L3.095 8.59a.504.504 0 0 1 .008-.021l2.432-6.251A.5.5 0 0 1 6 2ZM4.297 8.262h3.408L6.001 3.88L4.296 8.262Zm8.171-2.94a.5.5 0 0 0-.935.002L7.154 17H6.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.278l1.125-3h5.373l1.149 3H15.5a.5.5 0 1 0 0 1h2a.5.5 0 1 0 0-1h-.56L12.466 5.32ZM14.337 13H9.722l2.283-6.09L14.337 13Z"
      />
    </svg>
  );
}
export default TextFont;
