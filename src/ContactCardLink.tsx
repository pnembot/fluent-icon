import type { SVGProps } from "react";

export function ContactCardLink(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 10a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm-1.551.75a.949.949 0 0 0-.949.949c0 .847.577 1.585 1.399 1.791l.059.015c.684.17 1.4.17 2.084 0l.06-.015A1.846 1.846 0 0 0 10 11.699a.949.949 0 0 0-.949-.949H5.95ZM12 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4.75 4A1.75 1.75 0 0 0 3 5.75v8.5c0 .966.784 1.75 1.75 1.75h5.587a3.474 3.474 0 0 1-.302-1H4.75a.75.75 0 0 1-.75-.75v-8.5A.75.75 0 0 1 4.75 5h12.5a.75.75 0 0 1 .75.75v5.285c.353.05.69.154 1 .302V5.75A1.75 1.75 0 0 0 17.25 4H4.75Zm8.75 8a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H17a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H17Zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"
      />
    </svg>
  );
}
export default ContactCardLink;
