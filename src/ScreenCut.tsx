import type { SVGProps } from "react";

export function ScreenCut(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4.996a1 1 0 0 0-1 1v.5a.5.5 0 1 1-1 0v-.5a2 2 0 0 1 2-2h.5a.5.5 0 0 1 0 1H4Zm-1 8.008a1 1 0 0 0 1 1h.25a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 1 0v.5ZM3 8.5a.5.5 0 0 0-1 0v2a.5.5 0 1 0 1 0v-2Zm13-3.504a1 1 0 0 1 1 1v.5a.5.5 0 0 0 1 0v-.5a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1h.5Zm0 9.008a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 1 0v.5a2 2 0 0 1-2 2h-.252a.5.5 0 0 1 0-1H16ZM17.5 8a.5.5 0 0 0-.5.5v2a.5.5 0 1 0 1 0v-2a.5.5 0 0 0-.5-.5Zm-11-4.004a.5.5 0 0 0 0 1H9a.5.5 0 1 0 0-1H6.5Zm4 .5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5ZM7.216 8.087a.497.497 0 0 0-.14.692l2.319 3.478l-1.238 1.857a2 2 0 1 0 .094 3.744a2 2 0 0 0 .74-3.191l1.005-1.508l1.009 1.513a2 2 0 1 0 .832-.556l-1.24-1.859l.002-.003l-.601-.901l-.002.003L7.91 8.228a.503.503 0 0 0-.694-.14ZM12.5 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm-5 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm3.099-6.549l.6.902l1.717-2.574a.497.497 0 0 0-.14-.692a.502.502 0 0 0-.695.14L10.6 10.452Z"
      />
    </svg>
  );
}
export default ScreenCut;
