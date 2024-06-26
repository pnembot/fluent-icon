import type { SVGProps } from "react";

export function FolderArrowLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m8.067 3.3l1.319.99l-1.953 2.054a.5.5 0 0 1-.362.156H2v-1A2.5 2.5 0 0 1 4.5 3h2.667c.324 0 .64.105.9.3Zm.091 3.733a1.5 1.5 0 0 1-1.087.467H2v7A2.5 2.5 0 0 0 4.5 17h5.1a5.5 5.5 0 0 1 8.4-6.743V7l-.005-.164A2.5 2.5 0 0 0 15.5 4.5h-4.935L8.158 7.033ZM14.5 19a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Zm-2.353-4.854l-.003.003a.499.499 0 0 0-.144.348v.006a.5.5 0 0 0 .146.35l2 2a.5.5 0 0 0 .708-.707L13.707 15H16.5a.5.5 0 0 0 0-1h-2.793l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2Z"
      />
    </svg>
  );
}
export default FolderArrowLeftFilled;
