import type { SVGProps } from "react";

export function ClipboardLetter(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.085 3A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5v5.837l-.63-1.439a1.497 1.497 0 0 0-.37-.512V4.5a.5.5 0 0 0-.5-.5h-1.585A1.5 1.5 0 0 1 11.5 5h-3a1.5 1.5 0 0 1-1.415-1H5.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h3.586a1.494 1.494 0 0 0 0 1H5.5A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5.954 6.3a.5.5 0 0 0-.916 0l-3.496 8a.5.5 0 0 0 .916.4l1.18-2.7h3.721l1.183 2.7a.5.5 0 0 0 .916-.4l-3.504-8Zm.967 4.7h-2.846l1.421-3.253L15.421 14Z"
      />
    </svg>
  );
}
export default ClipboardLetter;
