import type { SVGProps } from "react";

export function TextCaseTitle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.5 3.5a.5.5 0 0 1 .5.5v4.891C13.53 8.337 14.232 8 15 8c1.657 0 3 1.567 3 3.5S16.657 15 15 15c-.768 0-1.47-.337-2-.891v.391a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5ZM15 14c.966 0 2-.97 2-2.5S15.966 9 15 9s-2 .97-2 2.5s1.034 2.5 2 2.5ZM6.957 3.836a.5.5 0 0 0-.94-.013L3.293 11h-.02v.054l-1.24 3.269a.5.5 0 0 0 .935.354L3.984 12h4.754l.926 2.664a.5.5 0 1 0 .945-.328l-3.652-10.5ZM4.363 11l2.1-5.537L8.39 11H4.363Z"
      />
    </svg>
  );
}
export default TextCaseTitle;
