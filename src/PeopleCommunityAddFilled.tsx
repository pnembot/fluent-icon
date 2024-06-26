import type { SVGProps } from "react";

export function PeopleCommunityAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 6.5c-.854 0-1.617.39-2.121 1a2.75 2.75 0 0 0 1.735 4.473a5.517 5.517 0 0 1 3.136-2.689V9.25c0-.665-.236-1.275-.629-1.75c-.504-.61-1.267-1-2.121-1Zm8.677 4.422a5.488 5.488 0 0 0-4.932-1.87a3.729 3.729 0 0 0-.427-1.552H17.5A1.5 1.5 0 0 1 19 9v.5c0 .48-.11.964-.323 1.422ZM9.207 13A5.5 5.5 0 0 0 9 14.5c0 1.797.861 3.392 2.194 4.395A6.666 6.666 0 0 1 10 19c-3.14 0-5-2.029-5-4v-.5A1.496 1.496 0 0 1 6.5 13h2.707Zm-4.892.284C2.205 12.713 1 11.087 1 9.5V9a1.5 1.5 0 0 1 1.5-1.5h4.183a3.734 3.734 0 0 0-.433 1.75A3.74 3.74 0 0 0 7.45 12H6.5a2.5 2.5 0 0 0-2.185 1.284ZM6 1a2.75 2.75 0 1 1 0 5.5A2.75 2.75 0 0 1 6 1Zm8 0a2.75 2.75 0 1 1 0 5.5A2.75 2.75 0 0 1 14 1Zm.5 18a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm0-7a.5.5 0 0 1 .5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default PeopleCommunityAddFilled;
