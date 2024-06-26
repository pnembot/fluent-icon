import type { SVGProps } from "react";

export function BookCompassFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm6 .5a.5.5 0 0 0-.5.5v1.063a2 2 0 0 0-.744 3.504l-1.213 2.73a.5.5 0 0 0 .914.406l1.213-2.73a2.014 2.014 0 0 0 .66 0l1.213 2.73a.5.5 0 1 0 .914-.406l-1.214-2.73a2 2 0 0 0-.743-3.504V5a.5.5 0 0 0-.5-.5Zm-.5 2.634a1 1 0 1 0 1 1.731a1 1 0 0 0-1-1.731Z"
      />
    </svg>
  );
}
export default BookCompassFilled;
