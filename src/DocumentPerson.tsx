import type { SVGProps } from "react";

export function DocumentPerson(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v5.041a3.02 3.02 0 0 1 1 0V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1H8.962a3.177 3.177 0 0 1-.33 1H14a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6Zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7ZM6.5 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0ZM8 16.5C8 17.745 7 19 4.5 19S1 17.75 1 16.5A1.5 1.5 0 0 1 2.5 15h4A1.5 1.5 0 0 1 8 16.5Z"
      />
    </svg>
  );
}
export default DocumentPerson;
