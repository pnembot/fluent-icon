import type { SVGProps } from "react";

export function TextCaseLowercaseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.749 3.25a.75.75 0 0 1 .75.75v4.657A2.71 2.71 0 0 1 14.249 8c1.657 0 3 1.567 3 3.5s-1.343 3.5-3 3.5a2.71 2.71 0 0 1-1.75-.657v.157a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Zm2.5 10.25c.62 0 1.5-.67 1.5-2s-.88-2-1.5-2s-1.5.67-1.5 2s.88 2 1.5 2ZM5.653 8.937c-.458.018-.85.125-1.068.234a.75.75 0 0 1-.671-1.342c.447-.223 1.056-.367 1.681-.39c.63-.025 1.346.069 1.99.39c1.42.71 1.416 2.125 1.414 2.628V14.5a.75.75 0 0 1-1.498.056c-.871.539-1.89.85-2.945.57c-2.077-.555-2.801-3.365-.723-4.75c.774-.516 1.702-.652 2.526-.61c.379.02.753.077 1.105.162c-.055-.31-.196-.58-.55-.757c-.357-.178-.807-.251-1.261-.234ZM7.499 11.5a4.508 4.508 0 0 0-1.216-.235c-.629-.032-1.201.082-1.618.36c-.924.616-.646 1.805.278 2.052c.75.2 1.668-.183 2.556-.996V11.5Z"
      />
    </svg>
  );
}
export default TextCaseLowercaseFilled;
