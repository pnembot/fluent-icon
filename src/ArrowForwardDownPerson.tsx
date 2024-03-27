import type { SVGProps } from "react";

export function ArrowForwardDownPerson(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m13.61 4.318l2.683 2.683L12 7l-.261-.004C8.806 6.905 7 5.273 7 3a.5.5 0 0 0-1 0l.004.208C6.114 6.024 8.478 8 12 8h4.293l-2.682 2.682l-.058.07a.5.5 0 0 0 .765.637l3.55-3.55l.055-.072l.04-.076l.02-.062l.015-.086v-.067L18 7.5a.496.496 0 0 0-.011-.105l-.005-.02l-.023-.068l-.027-.056l-.05-.071l-3.566-3.57l-.07-.057a.5.5 0 0 0-.637.765ZM7.5 10.999a2 2 0 1 1-4 0a2 2 0 0 1 4 0ZM9 15.5C9 16.745 8 18 5.5 18S2 16.75 2 15.5A1.5 1.5 0 0 1 3.5 14h4A1.5 1.5 0 0 1 9 15.5Z"
      />
    </svg>
  );
}
export default ArrowForwardDownPerson;
