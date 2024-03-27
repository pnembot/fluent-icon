import type { SVGProps } from "react";

export function MailTemplate(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.5A2.5 2.5 0 0 1 4.5 2h9A2.5 2.5 0 0 1 16 4.5v3.535A3.53 3.53 0 0 0 15.5 8H15V4.5A1.5 1.5 0 0 0 13.5 3h-9A1.5 1.5 0 0 0 3 4.5v9A1.5 1.5 0 0 0 4.5 15H6v.5c0 .17.012.337.035.5H4.5A2.5 2.5 0 0 1 2 13.5v-9Zm11 3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5Zm-8-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm2 6A2.5 2.5 0 0 1 9.5 9h6a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 7 15.5v-4ZM9.5 10a1.5 1.5 0 0 0-1.476 1.231l4.476 2.686l4.476-2.686A1.5 1.5 0 0 0 15.5 10h-6ZM8 15.5A1.5 1.5 0 0 0 9.5 17h6a1.5 1.5 0 0 0 1.5-1.5v-3.117l-4.243 2.546a.5.5 0 0 1-.514 0L8 12.383V15.5Z"
      />
    </svg>
  );
}
export default MailTemplate;
