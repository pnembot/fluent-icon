import type { SVGProps } from "react";

export function KeyMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.32 2.013A4 4 0 0 0 6.162 7.13l-3.987 3.986a.6.6 0 0 0-.176.424v2.86a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V13h1.9a.6.6 0 0 0 .6-.6v-1.693l.735-.735a5.51 5.51 0 0 1-.569-.846l-.99.991a.6.6 0 0 0-.176.424V12H5.6a.6.6 0 0 0-.6.6V14H3v-2.293l4.32-4.32l-.118-.303a3.001 3.001 0 0 1 1.96-3.965c.33-.423.72-.796 1.157-1.106ZM13.5 6.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM9 6.5a4.5 4.5 0 1 1 7 3.742v2.05l.783.784a.6.6 0 0 1 0 .848L15.707 15l1.068 1.067a.6.6 0 0 1-.05.893l-2.35 1.88a.6.6 0 0 1-.75 0l-2.4-1.92a.6.6 0 0 1-.225-.468v-6.21A4.496 4.496 0 0 1 9 6.5ZM13.5 3a3.5 3.5 0 0 0-1.75 6.532a.5.5 0 0 1 .25.433v6.295l2 1.6l1.751-1.401l-1.034-1.035a.6.6 0 0 1 0-.848l1.076-1.076l-.617-.617a.6.6 0 0 1-.176-.424V9.965a.5.5 0 0 1 .25-.433A3.5 3.5 0 0 0 13.5 3Z"
      />
    </svg>
  );
}
export default KeyMultiple;
