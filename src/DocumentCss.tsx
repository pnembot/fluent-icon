import type { SVGProps } from "react";

export function DocumentCss(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2h-.5c.219-.29.375-.63.45-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v7.764a2.997 2.997 0 0 0-1-.593V4Zm7.5 3h3.293L11 3.207V6.5a.5.5 0 0 0 .5.5ZM3 12a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0a.5.5 0 0 0-1 0a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0a.5.5 0 0 0 1 0a2 2 0 0 0-2-2Zm8.5 0a1.5 1.5 0 0 0-1.5 1.5v.382a1.5 1.5 0 0 0 .83 1.342l.894.447a.5.5 0 0 1 .276.447v.382a.5.5 0 0 1-1 0a.5.5 0 0 0-1 0a1.5 1.5 0 0 0 3 0v-.382a1.5 1.5 0 0 0-.83-1.342l-.894-.447a.5.5 0 0 1-.276-.447V13.5a.5.5 0 0 1 1 0a.5.5 0 0 0 1 0a1.5 1.5 0 0 0-1.5-1.5ZM6 13.5a1.5 1.5 0 0 1 3 0a.5.5 0 0 1-1 0a.5.5 0 0 0-1 0v.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 9 16.118v.382a1.5 1.5 0 0 1-3 0a.5.5 0 0 1 1 0a.5.5 0 0 0 1 0v-.382a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 6 13.882V13.5Z"
      />
    </svg>
  );
}
export default DocumentCss;
