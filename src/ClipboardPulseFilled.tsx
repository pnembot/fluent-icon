import type { SVGProps } from "react";

export function ClipboardPulseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.085 3A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5V10h-1.573l-.585-1.17a1.5 1.5 0 0 0-2.684 0l-.325.65l-.9-2.921A1.5 1.5 0 0 0 7.13 6.39L5.525 10H4V4.5A1.5 1.5 0 0 1 5.5 3h1.585ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5 10H16v3.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5V13h2.5a1.5 1.5 0 0 0 1.37-.89l.374-.841l.822 2.672a1.5 1.5 0 0 0 2.776.23l.741-1.484A1.5 1.5 0 0 0 13.5 13ZM8.978 6.853a.5.5 0 0 0-.935-.056L6.175 11H2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .457-.297l1.458-3.28l1.607 5.224a.5.5 0 0 0 .925.077l1.553-3.106l.553 1.106A.5.5 0 0 0 13.5 12h4a.5.5 0 0 0 0-1h-3.691l-.862-1.724a.5.5 0 0 0-.894 0L10.61 12.16L8.978 6.853Z"
      />
    </svg>
  );
}
export default ClipboardPulseFilled;
