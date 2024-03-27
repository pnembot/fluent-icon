import type { SVGProps } from "react";

export function DocumentTs(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M12.56 4.35L9.65 1.44A1.516 1.516 0 0 0 8.59 1H5a2.006 2.006 0 0 0-2 2v6h1V3a1 1 0 0 1 1-1h3v2.5A1.5 1.5 0 0 0 9.5 6H12v7a1 1 0 0 1-1 1H8.96c-.06.361-.204.704-.42 1H11a2.006 2.006 0 0 0 2-2V5.41a1.516 1.516 0 0 0-.44-1.06ZM9.5 5a.5.5 0 0 1-.5-.5V2.21L11.79 5H9.5ZM6.573 15h-.146A1.428 1.428 0 0 1 5 13.573a.533.533 0 0 1 .5-.537a.47.47 0 0 1 .5.464a.449.449 0 0 0 .427.5h.146a.427.427 0 0 0 .192-.808l-.976-.492a1.427 1.427 0 0 1 .638-2.7h.146A1.428 1.428 0 0 1 8 11.427a.533.533 0 0 1-.5.537a.47.47 0 0 1-.5-.464v-.073A.427.427 0 0 0 6.573 11h-.146a.427.427 0 0 0-.192.808l.976.489A1.427 1.427 0 0 1 6.573 15Zm-2.22-4.146A.5.5 0 0 0 4 10H1a.5.5 0 0 0 0 1h1v3.5a.5.5 0 0 0 1 0V11h1a.5.5 0 0 0 .354-.146Z"
      />
    </svg>
  );
}
export default DocumentTs;
