import type { SVGProps } from "react";

export function Tent(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.4 2.818a.5.5 0 0 0-.767 0c-1.197 1.435-3.558 3.14-4.916 3.898a.5.5 0 0 0-.251.368L3.375 15H2.5a.5.5 0 0 0 0 1h3.936c.033.007.066.01.1.01h6.906a.498.498 0 0 0 .1-.01H17.5a.5.5 0 0 0 0-1h-.841l-1.09-7.916a.5.5 0 0 0-.252-.368c-1.358-.758-3.72-2.463-4.916-3.898ZM13.693 15c-1.356-1.918-2.321-3.785-3.21-7.198a.5.5 0 0 0-.968.002C8.53 11.639 7.366 13.55 6.293 15H4.384l1.039-7.535c1.303-.762 3.306-2.206 4.594-3.575c1.288 1.369 3.29 2.813 4.594 3.575L15.65 15h-1.957Zm-1.213 0H7.522c.837-1.218 1.7-2.783 2.478-5.251c.704 2.228 1.49 3.77 2.479 5.25Z"
      />
    </svg>
  );
}
export default Tent;
