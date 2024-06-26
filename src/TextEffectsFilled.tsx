import type { SVGProps } from "react";

export function TextEffectsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.086 3.906a2.25 2.25 0 0 0-4.171 0l-3.017 7.453a2.198 2.198 0 0 0-.038.095l-1.195 2.952a2.25 2.25 0 0 0 4.171 1.688l.645-1.594h3.039l.645 1.594a2.25 2.25 0 1 0 4.171-1.688l-1.194-2.952a2.273 2.273 0 0 0-.04-.095l-3.016-7.453Zm-1.39.563l3.03 7.484l.012.032l1.208 2.984a.75.75 0 0 1-1.39.562L12.53 13H7.47l-1.025 2.531a.75.75 0 0 1-1.39-.562l1.207-2.984a.72.72 0 0 1 .013-.032l3.03-7.484a.75.75 0 0 1 1.39 0Zm1.228 7.031H8.078L10 6.749l1.923 4.751Z"
      />
    </svg>
  );
}
export default TextEffectsFilled;
