import type { SVGProps } from "react";

export function Password(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.854 8.146a.5.5 0 0 0-.708 0l-.646.647l-.646-.647a.5.5 0 1 0-.708.708l.647.646l-.647.646a.5.5 0 0 0 .708.708l.646-.647l.646.647a.5.5 0 0 0 .708-.708L7.207 9.5l.647-.646a.5.5 0 0 0 0-.708Zm3.292 0a.5.5 0 0 1 .708.708l-.647.646l.647.646a.5.5 0 0 1-.708.708l-.646-.647l-.646.647a.5.5 0 0 1-.708-.708l.647-.646l-.647-.646a.5.5 0 1 1 .708-.708l.646.647l.646-.647ZM13.5 10a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM4.75 4A2.75 2.75 0 0 0 2 6.75v5.5A2.75 2.75 0 0 0 4.75 15h10.5A2.75 2.75 0 0 0 18 12.25v-5.5A2.75 2.75 0 0 0 15.25 4H4.75ZM3 6.75C3 5.784 3.784 5 4.75 5h10.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 15.25 14H4.75A1.75 1.75 0 0 1 3 12.25v-5.5Z"
      />
    </svg>
  );
}
export default Password;
