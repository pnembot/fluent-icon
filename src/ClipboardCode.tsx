import type { SVGProps } from "react";

export function ClipboardCode(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.085 3A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5v5.877A1.494 1.494 0 0 0 15 10V4.5a.5.5 0 0 0-.5-.5h-1.585A1.5 1.5 0 0 1 11.5 5h-3a1.5 1.5 0 0 1-1.415-1H5.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h3.957l.404.472a1.5 1.5 0 0 0 1.139.524V18H5.5A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm6.986 8.637a.5.5 0 1 0-.962-.274l-2 7a.5.5 0 1 0 .962.274l2-7Zm-4.106 1.684a.5.5 0 1 0-.76-.65l-1.5 1.75a.5.5 0 0 0 0 .65l1.5 1.75a.5.5 0 1 0 .76-.65l-1.222-1.425l1.222-1.425Zm5.295 3.554a.5.5 0 0 1-.055-.705l1.221-1.424l-1.22-1.425a.5.5 0 0 1 .759-.65l1.5 1.75a.5.5 0 0 1 0 .65l-1.5 1.75a.5.5 0 0 1-.705.054Z"
      />
    </svg>
  );
}
export default ClipboardCode;
