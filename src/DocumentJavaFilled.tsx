import type { SVGProps } from "react";

export function DocumentJavaFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v3.02a1.5 1.5 0 0 0-1.125.88a1.5 1.5 0 0 0-2.79.104l-.335.955l-.334-.955a1.5 1.5 0 0 0-2.791-.104a1.5 1.5 0 0 0-2.79.104L5 14.389V12.5a1.5 1.5 0 0 0-1-1.415V3.5A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM11.75 18a.5.5 0 0 0 .472-.335l1.75-5a.5.5 0 1 0-.944-.33l-1.278 3.652l-1.278-3.652a.5.5 0 1 0-.944.33l1.75 5a.5.5 0 0 0 .472.335Zm4.972-5.665a.5.5 0 0 0-.944 0l-1.75 5a.5.5 0 1 0 .944.33l.233-.665h2.09l.233.665a.5.5 0 1 0 .944-.33l-1.75-5ZM16.945 16h-1.39l.695-1.986l.695 1.986ZM3.5 12a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-3 0V16a.5.5 0 1 1 1 0v.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 1 .5-.5Zm3.75 0a.5.5 0 0 1 .472.335l1.75 5a.5.5 0 1 1-.944.33L8.295 17h-2.09l-.233.665a.5.5 0 1 1-.944-.33l1.75-5A.5.5 0 0 1 7.25 12Zm0 2.014L6.555 16h1.39l-.695-1.986Z"
      />
    </svg>
  );
}
export default DocumentJavaFilled;
