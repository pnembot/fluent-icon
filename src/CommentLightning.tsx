import type { SVGProps } from "react";

export function CommentLightning(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.61 7a.5.5 0 0 1 .485.621l-.434 1.738c-.121.483.462.827.826.487l4.873-4.548A.75.75 0 0 0 17.848 4h-.404a.5.5 0 0 1-.474-.658l.561-1.684A.5.5 0 0 0 17.057 1h-3.473a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .462.692h1.11Zm-1.275-4l-.417 1H4.6C3.704 4 3 4.713 3 5.566v6.71c0 .853.704 1.566 1.6 1.566h1.6V17h.003l.002-.001l4.276-3.157H15.4c.896 0 1.6-.713 1.6-1.566v-4.34l1-.933v5.273c0 1.418-1.164 2.566-2.6 2.566h-4.59l-4.011 2.961a1.009 1.009 0 0 1-1.4-.199a.978.978 0 0 1-.199-.59v-2.172h-.6c-1.436 0-2.6-1.149-2.6-2.566v-6.71C2 4.149 3.164 3 4.6 3h6.735Z"
      />
    </svg>
  );
}
export default CommentLightning;
