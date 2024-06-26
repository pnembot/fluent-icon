import type { SVGProps } from "react";

export function DocumentMentionFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H8.386a1.54 1.54 0 0 0-.037-.179C9.953 17.634 11 16.088 11 14.5a5.5 5.5 0 0 0-7-5.293V3.5A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM10 14.5a4.5 4.5 0 1 0-3.138 4.29l.185-.063l.067-.03a.54.54 0 0 0-.438-.984l-.14.047l-.201.057A3.42 3.42 0 1 1 8.92 14.5c0 .739-.447 1.26-.9 1.26c-.338 0-.54-.365-.54-1.26v-1.8l-.005-.073a.54.54 0 0 0-1.004-.194a1.8 1.8 0 0 0-.971-.273c-1.217 0-1.98 1.092-1.98 2.34c0 1.248.763 2.34 1.98 2.34a1.79 1.79 0 0 0 1.338-.579c.266.37.658.579 1.182.579c1.09 0 1.98-1.039 1.98-2.34Zm-5.4 0c0-.717.38-1.26.9-1.26s.9.543.9 1.26s-.38 1.26-.9 1.26s-.9-.543-.9-1.26Z"
      />
    </svg>
  );
}
export default DocumentMentionFilled;
