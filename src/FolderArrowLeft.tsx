import type { SVGProps } from "react";

export function FolderArrowLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 5.5A2.5 2.5 0 0 1 4.5 3h2.667c.324 0 .64.105.9.3l1.6 1.2H15.5A2.5 2.5 0 0 1 18 7v3.257a5.503 5.503 0 0 0-1-.657V7a1.5 1.5 0 0 0-1.5-1.5H9.62L8.157 7.034A1.5 1.5 0 0 1 7.07 7.5H3v7A1.5 1.5 0 0 0 4.5 16h4.707c.099.349.23.683.393 1H4.5A2.5 2.5 0 0 1 2 14.5v-9ZM4.5 4A1.5 1.5 0 0 0 3 5.5v1h4.071a.5.5 0 0 0 .363-.155l1.26-1.324L7.467 4.1a.5.5 0 0 0-.3-.1H4.5Zm10 15a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Zm-2.353-4.854l-.003.003a.499.499 0 0 0-.144.348v.006a.5.5 0 0 0 .146.35l2 2a.5.5 0 0 0 .708-.707L13.707 15H16.5a.5.5 0 0 0 0-1h-2.793l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2Z"
      />
    </svg>
  );
}
export default FolderArrowLeft;
