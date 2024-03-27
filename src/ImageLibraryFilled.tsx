import type { SVGProps } from "react";

export function ImageLibraryFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16 5.764c.567.507.94 1.226.993 2.033L17 8v4.5a4.5 4.5 0 0 1-4.288 4.495L12.5 17H8a2.99 2.99 0 0 1-2.105-.862L5.764 16H12.5a3.5 3.5 0 0 0 3.482-3.142l.013-.178l.005-.18V5.764zM9.613 10.33l.094.083l4.031 4.031c-.436.31-.958.508-1.524.547L12 15H6a2.986 2.986 0 0 1-1.57-.444l-.168-.11l4.03-4.032a1 1 0 0 1 1.32-.083zM12 3a3 3 0 0 1 2.995 2.824L15 6v6c0 .576-.162 1.114-.444 1.57l-.11.168l-4.032-4.03a2 2 0 0 0-2.701-.118l-.127.117l-4.031 4.031a2.984 2.984 0 0 1-.547-1.524L3 12V6a3 3 0 0 1 2.824-2.995L6 3h6zm-.5 2.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
export default ImageLibraryFilled;
