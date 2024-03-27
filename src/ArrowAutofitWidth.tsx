import type { SVGProps } from "react";

export function ArrowAutofitWidth(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m16.371 15.003l-1.18 1.139a.5.5 0 1 0 .695.72l1.886-1.822a.75.75 0 0 0 0-1.079l-1.886-1.82a.5.5 0 1 0-.694.719l1.183 1.143h-3.874a.5.5 0 1 0 0 1h3.87ZM15.001 3a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v4.5a.5.5 0 0 1-1 0V5a2 2 0 0 1 2-2h10ZM4.811 16.142l-1.18-1.14H7.5a.5.5 0 1 0 0-1H3.627L4.81 12.86a.5.5 0 0 0-.694-.72L2.23 13.961a.75.75 0 0 0 0 1.08l1.886 1.82a.5.5 0 1 0 .694-.72Z"
      />
    </svg>
  );
}
export default ArrowAutofitWidth;
