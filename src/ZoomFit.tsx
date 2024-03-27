import type { SVGProps } from "react";

export function ZoomFit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.86 7.847a.5.5 0 0 0-.72-.694L1.399 8.959a1.5 1.5 0 0 0 0 2.082l1.74 1.807a.5.5 0 0 0 .72-.694l-1.74-1.807a.5.5 0 0 1 0-.694L3.86 7.847ZM7.152 3.14a.5.5 0 1 0 .694.72l1.806-1.74a.5.5 0 0 1 .694 0l1.806 1.74a.5.5 0 0 0 .694-.719L11.04 1.4a1.5 1.5 0 0 0-2.082 0L7.152 3.14Zm9.707 4.012a.5.5 0 1 0-.72.694l1.746 1.811a.5.5 0 0 1 0 .695l-1.745 1.8a.5.5 0 0 0 .718.696l1.744-1.8a1.5 1.5 0 0 0 .003-2.085l-1.745-1.81ZM7.846 16.14a.5.5 0 1 0-.694.72l1.812 1.745a1.5 1.5 0 0 0 2.084-.003l1.799-1.743a.5.5 0 1 0-.696-.718l-1.799 1.743a.5.5 0 0 1-.694 0L7.846 16.14ZM8 6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8ZM7 8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8Z"
      />
    </svg>
  );
}
export default ZoomFit;
