import type { SVGProps } from "react";

export function FolderArrowRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m9.386 4.29l-1.32-.99a1.5 1.5 0 0 0-.9-.3H4.5A2.5 2.5 0 0 0 2 5.5v1h5.07a.5.5 0 0 0 .363-.156L9.386 4.29Zm1.179.21L8.158 7.033a1.5 1.5 0 0 1-1.087.467H2v7A2.5 2.5 0 0 0 4.5 17h5.1a5.5 5.5 0 0 1 8.4-6.743V7l-.005-.164A2.5 2.5 0 0 0 15.5 4.5h-4.935ZM14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Zm2.353 4.854l.003-.003a.499.499 0 0 0 .144-.348v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L15.293 14H12.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2Z"
      />
    </svg>
  );
}
export default FolderArrowRightFilled;
