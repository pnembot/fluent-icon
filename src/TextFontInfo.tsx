import type { SVGProps } from "react";

export function TextFontInfo(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.957 3.836a.5.5 0 0 0-.94-.013L4.293 11h-.02v.054l-1.24 3.269a.5.5 0 0 0 .935.354L4.984 12h3.223c.099-.349.23-.683.393-1H5.363l2.1-5.537l1.645 4.726c.228-.302.486-.58.77-.828L7.957 3.836Zm5.543 7.039a.625.625 0 1 0 0 1.25a.625.625 0 0 0 0-1.25Zm0 5.125a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5Zm0-7a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9Zm0 8a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7Z"
      />
    </svg>
  );
}
export default TextFontInfo;
