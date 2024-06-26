import type { SVGProps } from "react";

export function FolderProhibitedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m9.386 4.29l-1.32-.99a1.5 1.5 0 0 0-.9-.3H4.5A2.5 2.5 0 0 0 2 5.5v1h5.07a.5.5 0 0 0 .363-.156L9.386 4.29Zm1.179.21L8.158 7.033a1.5 1.5 0 0 1-1.087.467H2v7A2.5 2.5 0 0 0 4.5 17h5.1a5.5 5.5 0 0 1 8.4-6.743V7l-.005-.164A2.5 2.5 0 0 0 15.5 4.5h-4.935ZM10 14.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0Zm4.5-3.5a3.5 3.5 0 0 0-2.803 5.596l4.9-4.9A3.484 3.484 0 0 0 14.5 11Zm0 7a3.5 3.5 0 0 0 2.803-5.596l-4.9 4.9A3.49 3.49 0 0 0 14.5 18Z"
      />
    </svg>
  );
}
export default FolderProhibitedFilled;
