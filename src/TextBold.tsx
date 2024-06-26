import type { SVGProps } from "react";

export function TextBold(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 4.25C5.5 3.56 6.06 3 6.75 3h3.501c2.403 0 3.999 1.988 3.999 4c0 .872-.3 1.738-.834 2.44c.904.703 1.581 1.802 1.581 3.31c0 2.863-2.437 4.245-4.244 4.245H6.75c-.69 0-1.25-.56-1.25-1.25V4.25ZM8 11v3.495h2.753c.811 0 1.744-.618 1.744-1.745c0-1.129-.937-1.75-1.744-1.75H8Zm0-2.5h2.248A1.5 1.5 0 0 0 11.75 7c0-.78-.62-1.5-1.499-1.5H8v3Z"
      />
    </svg>
  );
}
export default TextBold;
