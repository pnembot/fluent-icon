import type { SVGProps } from "react";

export function DocumentTableCube(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.499 9a1.5 1.5 0 0 0-1.227.637l.927.463a.498.498 0 0 1 .3-.1h.5v.5l.894.447c.036.018.072.037.106.057V10h3.5a.5.5 0 0 1 .5.5V12h-3.14c.09.23.14.48.14.736V13h3v1.5a.5.5 0 0 1-.5.5h-2.5v1h2.5a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5h-5Zm-3.394.447a2 2 0 0 1 .894-.21V4a1 1 0 0 1 1-1h4v3.5a1.5 1.5 0 0 0 1.5 1.5h3.5v8a1 1 0 0 1-1 1H9.936c-.1.387-.314.736-.614 1H14a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.913-3.915A1.5 1.5 0 0 0 10.585 2H5.999a2 2 0 0 0-2 2v5.5l.106-.053ZM14.792 7h-3.293a.5.5 0 0 1-.5-.5V3.207L14.792 7Zm-13.76 9.507v-3.764a1 1 0 0 1 .552-.894l3-1.5a1 1 0 0 1 .894 0l3 1.5a1 1 0 0 1 .553.894v3.764a1 1 0 0 1-.553.894l-3 1.5a1 1 0 0 1-.894 0l-3-1.5a1 1 0 0 1-.553-.894Zm1.039-3.576a.5.5 0 0 0 .266.655l2.194.926v2.613a.5.5 0 1 0 1 0v-2.613l2.195-.926a.5.5 0 1 0-.39-.921l-2.305.973l-2.305-.973a.5.5 0 0 0-.655.266Z"
      />
    </svg>
  );
}
export default DocumentTableCube;
