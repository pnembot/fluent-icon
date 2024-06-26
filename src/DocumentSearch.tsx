import type { SVGProps } from "react";

export function DocumentSearch(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 12c0 .924-.314 1.775-.84 2.453l3.691 3.692a.5.5 0 1 1-.707.707L8.453 15.16A4 4 0 1 1 10 12Zm-4 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6ZM5.5 3a.5.5 0 0 0-.5.5v3.6c-.348.07-.683.177-1 .316V3.5A1.5 1.5 0 0 1 5.5 2h5.086a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16.5a1.5 1.5 0 0 1-1.5 1.5h-.587a1.494 1.494 0 0 0-.354-.563L13.12 17h1.38a.5.5 0 0 0 .5-.5V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H5.5Zm5.5.207V6.5a.5.5 0 0 0 .5.5h3.293L11 3.207Z"
      />
    </svg>
  );
}
export default DocumentSearch;
