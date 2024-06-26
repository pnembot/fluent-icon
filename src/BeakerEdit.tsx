import type { SVGProps } from "react";

export function BeakerEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 3h.75v4.747a2.5 2.5 0 0 1-.296 1.18l-2.606 4.865A1.5 1.5 0 0 0 3.67 16h5.805c.11-.362.283-.7.51-1H3.67a.5.5 0 0 1-.44-.736L4.71 11.5h6.58l.75 1.402l.74-.739l-1.734-3.235a2.5 2.5 0 0 1-.296-1.181V3h.75a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1Zm1.75 4.747V3h3.5v4.747a3.5 3.5 0 0 0 .415 1.653l.59 1.1h-5.51l.59-1.1a3.5 3.5 0 0 0 .415-1.653Zm4.73 7.63l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.18 2.18 0 0 1 .578-1.02Z"
      />
    </svg>
  );
}
export default BeakerEdit;
