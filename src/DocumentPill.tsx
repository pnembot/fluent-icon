import type { SVGProps } from "react";

export function DocumentPill(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3.203a3.615 3.615 0 0 1-.29-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v1.203c.32-.146.657-.242 1-.29V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6Zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7Zm3.56 3.647a2.621 2.621 0 0 0-3.707 0l-4 4a2.621 2.621 0 0 0 3.707 3.707l4-4a2.621 2.621 0 0 0 0-3.707Zm-3 .707a1.621 1.621 0 1 1 2.293 2.293L16 15.293L13.707 13l1.646-1.646Zm-2.207 4.292a.5.5 0 0 1 .708.708l-1 1a.5.5 0 0 1-.708-.708l1-1Z"
      />
    </svg>
  );
}
export default DocumentPill;
