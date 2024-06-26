import type { SVGProps } from "react";

export function BranchForkHintFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a3 3 0 0 0-.5 5.959v3.791a.5.5 0 0 0 1 0V11H12a2.5 2.5 0 0 0 2.5-2.5v-.541a3 3 0 1 0-1 0V8.5A1.5 1.5 0 0 1 12 10H6.5V7.959A3 3 0 0 0 6 2ZM4.875 13.407a.5.5 0 1 0-.582-.814a3.019 3.019 0 0 0-1.122 1.55a.5.5 0 1 0 .955.297a1.989 1.989 0 0 1 .749-1.033Zm2.903-.814a.5.5 0 1 0-.581.814a2.022 2.022 0 0 1 .748 1.033a.5.5 0 1 0 .955-.297a2.99 2.99 0 0 0-1.122-1.55Zm-3.492 3.413a.5.5 0 0 0-.874.486a3.002 3.002 0 0 0 1.381 1.275a.5.5 0 1 0 .414-.91a1.996 1.996 0 0 1-.92-.85Zm4.373.486a.5.5 0 0 0-.874-.486a2.001 2.001 0 0 1-.978.875a.5.5 0 1 0 .386.923a2.995 2.995 0 0 0 1.466-1.312Z"
      />
    </svg>
  );
}
export default BranchForkHintFilled;
