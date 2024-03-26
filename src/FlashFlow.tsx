import React, { SVGProps } from "react";

export function FlashFlow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6.192 2.77c.13-.456.547-.77 1.021-.77h5.25c.724 0 1.236.71 1.007 1.398l-.003.008L12.207 7h2.563c.946 0 1.407 1.144.766 1.811l-.003.004l-1.524 1.555a2.497 2.497 0 0 0-.627-.789l1.434-1.463a.057.057 0 0 0 .017-.032a.086.086 0 0 0-.007-.044a.079.079 0 0 0-.025-.034C14.796 8.004 14.788 8 14.77 8H11.5a.5.5 0 0 1-.471-.666l1.493-4.254a.062.062 0 0 0-.06-.08H7.213a.062.062 0 0 0-.06.045l-2.25 7.874c-.01.04.019.08.06.08H6.17c.194.55.544 1.026.997 1.376L6.031 16.92a.086.086 0 0 0-.003.029a.02.02 0 0 0 .003.011a.08.08 0 0 0 .072.04a.03.03 0 0 0 .01-.004a.087.087 0 0 0 .024-.018l.003-.004l4.205-4.292c.339-.17.64-.403.891-.682h.183l.252.757l-4.815 4.916c-.754.782-2.059.06-1.795-.996l1.17-4.679H4.963a1.062 1.062 0 0 1-1.021-1.354l2.25-7.873Zm12.53 12.247A1.992 1.992 0 0 1 17 16a2 2 0 0 1-1.999-2h-.78a1.5 1.5 0 0 1-1.414-1l-.008-.026l-.544-1.632A.5.5 0 0 0 11.78 11h-1.047A2 2 0 0 1 7 10a2 2 0 0 1 4 0h.78a1.5 1.5 0 0 1 1.422 1.026l.544 1.632a.5.5 0 0 0 .475.342h1.047A2 2 0 0 1 19 14c0 .371-.101.719-.277 1.017ZM17 15a1 1 0 0 0 1-1v-.013l-.001-.038A1 1 0 0 0 16 14v.018A1 1 0 0 0 17 15Zm-8-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default FlashFlow;