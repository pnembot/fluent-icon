import type { SVGProps } from "react";

export function DocumentPdf(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-.166h.334a1.167 1.167 0 0 0 0-2.334H6.5Zm.834 1.334H7V12h.333a.167.167 0 0 1 0 .334ZM12 11.499a.5.5 0 0 1 .5-.499h.999a.5.5 0 0 1 0 1H13v.335h.5a.5.5 0 1 1 0 1H13l.001.164a.5.5 0 0 1-1 .002L12 12.834v-1.335ZM9.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h.502a1.5 1.5 0 0 0 0-3H9.5Zm.5 2v-1h.002a.5.5 0 0 1 0 1H10ZM4.001 4a2 2 0 0 1 2-2h4.585a1.5 1.5 0 0 1 1.061.44l3.914 3.914a1.5 1.5 0 0 1 .44 1.06v1.668a1.5 1.5 0 0 1 .998 1.414v4.003a1.5 1.5 0 0 1-.998 1.414V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-.087A1.5 1.5 0 0 1 3 14.5v-4.003a1.5 1.5 0 0 1 1-1.414V4Zm11 4h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v4.996h10V8ZM5 15.999A1 1 0 0 0 6 17h8a1 1 0 0 0 1-1.001H5Zm6-12.792V6.5a.5.5 0 0 0 .5.5h3.292L11 3.207ZM4.502 9.996a.5.5 0 0 0-.5.5v4.003a.5.5 0 0 0 .5.5h10.997a.5.5 0 0 0 .5-.5v-4.003a.5.5 0 0 0-.5-.5H4.502Z"
      />
    </svg>
  );
}
export default DocumentPdf;
