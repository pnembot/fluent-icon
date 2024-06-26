import type { SVGProps } from "react";

export function DocumentJava(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v7.085A1.5 1.5 0 0 1 5 12.5V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v3.67c.228-.343.59-.58 1-.65V7.415a1.5 1.5 0 0 0-.44-1.06L11.646 2.44a1.5 1.5 0 0 0-1.06-.44H6Zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7ZM11.75 18a.5.5 0 0 0 .472-.335l1.75-5a.5.5 0 1 0-.944-.33l-1.278 3.652l-1.278-3.652a.5.5 0 1 0-.944.33l1.75 5a.5.5 0 0 0 .472.335Zm4.972-5.665a.5.5 0 0 0-.944 0l-1.75 5a.5.5 0 1 0 .944.33l.233-.665h2.09l.233.665a.5.5 0 1 0 .944-.33l-1.75-5ZM16.945 16h-1.39l.695-1.986l.695 1.986ZM3.5 12a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-3 0V16a.5.5 0 1 1 1 0v.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 1 .5-.5Zm3.75 0a.5.5 0 0 1 .472.335l1.75 5a.5.5 0 1 1-.944.33L8.295 17h-2.09l-.233.665a.5.5 0 1 1-.944-.33l1.75-5A.5.5 0 0 1 7.25 12Zm0 2.014L6.555 16h1.39l-.695-1.986Z"
      />
    </svg>
  );
}
export default DocumentJava;
