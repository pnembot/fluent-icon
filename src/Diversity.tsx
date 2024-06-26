import type { SVGProps } from "react";

export function Diversity(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V5ZM4.913 3.674a1.214 1.214 0 0 1 2.174 0l1.78 3.537C9.277 8.03 8.688 9 7.778 9H4.22c-.91 0-1.5-.97-1.087-1.79l1.779-3.536Zm1.28.45a.214.214 0 0 0-.387 0L4.027 7.66a.231.231 0 0 0 .194.34H7.78c.15 0 .279-.171.194-.34l-1.78-3.537ZM9 14a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm-1 0a2 2 0 0 0-3.016-1.723l2.74 2.739A1.99 1.99 0 0 0 8 14Zm-2 2c.37 0 .718-.101 1.016-.277l-2.74-2.739A2 2 0 0 0 6 16Zm7.64-4.913a.786.786 0 0 1 .72 0l2.23 1.152a.75.75 0 0 1 .41.664v2.194a.75.75 0 0 1-.41.664l-2.23 1.152a.786.786 0 0 1-.72 0l-2.23-1.152a.75.75 0 0 1-.41-.664v-2.194a.75.75 0 0 1 .41-.664l2.23-1.152ZM12 13.06v1.88l2 1.033l2-1.033v-1.88l-2-1.033l-2 1.033Z"
      />
    </svg>
  );
}
export default Diversity;
