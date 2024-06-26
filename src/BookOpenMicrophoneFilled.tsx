import type { SVGProps } from "react";

export function BookOpenMicrophoneFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 16.137A2.742 2.742 0 0 1 8 17H3.75A1.75 1.75 0 0 1 2 15.25V4.75C2 3.784 2.784 3 3.75 3H8c.788 0 1.499.331 2 .863A2.742 2.742 0 0 1 12 3h4.25c.966 0 1.75.784 1.75 1.75v6.75a2.5 2.5 0 0 0-1.5-2.292V4.75a.25.25 0 0 0-.25-.25H12c-.69 0-1.25.56-1.25 1.25v8.5c0 .3.106.576.282.791c.086.714.338 1.377.718 1.948a2.743 2.743 0 0 1-1.75-.852ZM3.5 4.75v10.5c0 .138.112.25.25.25H8c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25H3.75a.25.25 0 0 0-.25.25Zm13.926 11.344A2.49 2.49 0 0 0 18 14.5a.5.5 0 0 1 1 0a3.501 3.501 0 0 1-3 3.465v.535a.5.5 0 0 1-1 0v-.535a3.5 3.5 0 0 1-3-3.465a.5.5 0 0 1 1 0a2.491 2.491 0 0 0 .574 1.594c.459.553 1.15.906 1.925.906h.002c.774 0 1.467-.353 1.925-.906ZM15.5 16a1.496 1.496 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 3 0v3a1.5 1.5 0 0 1-1.5 1.5Z"
      />
    </svg>
  );
}
export default BookOpenMicrophoneFilled;
