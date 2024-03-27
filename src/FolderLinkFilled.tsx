import type { SVGProps } from "react";

export function FolderLinkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m9.386 4.29l-1.32-.99a1.5 1.5 0 0 0-.9-.3H4.5A2.5 2.5 0 0 0 2 5.5v1h5.07a.5.5 0 0 0 .363-.156L9.386 4.29Zm1.179.21L8.158 7.033a1.5 1.5 0 0 1-1.087.467H2v7A2.5 2.5 0 0 0 4.5 17h2.258a4.5 4.5 0 0 1 3.742-7h5c.925 0 1.785.28 2.5.758V7l-.005-.164A2.5 2.5 0 0 0 15.5 4.5h-4.935ZM8 14.5a2.5 2.5 0 0 1 2.5-2.5h1a.5.5 0 0 0 0-1h-1a3.5 3.5 0 1 0 0 7h1a.5.5 0 0 0 0-1h-1A2.5 2.5 0 0 1 8 14.5Zm10 0a2.5 2.5 0 0 0-2.5-2.5h-1a.5.5 0 0 1 0-1h1a3.5 3.5 0 1 1 0 7h-1a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 0 2.5-2.5Zm-8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default FolderLinkFilled;
