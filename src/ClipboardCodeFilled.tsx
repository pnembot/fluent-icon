import type { SVGProps } from "react";

export function ClipboardCodeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.085 3A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5v5.877a1.5 1.5 0 0 0-2.438.71l-.403 1.413h-.743a1.5 1.5 0 0 0-2.555-.48l-1.5 1.75a1.5 1.5 0 0 0 0 1.952l1.5 1.75a1.5 1.5 0 0 0 1.139.524V18H5.5A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm2.88 10.321a.5.5 0 1 0-.76-.65l-1.5 1.75a.5.5 0 0 0 0 .65l1.5 1.75a.499.499 0 0 0 .705.054a.5.5 0 0 0 .055-.705l-1.222-1.424l1.222-1.425Zm4.105-1.684a.5.5 0 1 0-.961-.274l-2 7a.5.5 0 1 0 .962.274l2-7Zm1.19 5.238a.5.5 0 0 1-.055-.705l1.221-1.424l-1.22-1.425a.5.5 0 0 1 .759-.65l1.5 1.75a.5.5 0 0 1 0 .65l-1.5 1.75a.5.5 0 0 1-.705.054Z"
      />
    </svg>
  );
}
export default ClipboardCodeFilled;
