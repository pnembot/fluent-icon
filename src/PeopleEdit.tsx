import React, { SVGProps } from "react";

export function PeopleEdit(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 5.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0ZM6.75 2.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5ZM10 10a2 2 0 0 1 2 1.944l-1.416 1.415a2.96 2.96 0 0 0 .41-1.198c.003-.038.005-.066.005-.083l.001-.017V12a1 1 0 0 0-1-1H3.5a1 1 0 0 0-1 1v.078l.007.083a2.948 2.948 0 0 0 .498 1.336C3.492 14.201 4.513 15 6.75 15c1.56 0 2.529-.389 3.137-.863c-.209.31-.363.653-.454 1.018l-.106.425c-.682.26-1.529.42-2.577.42c-2.513 0-3.867-.92-4.568-1.934a3.948 3.948 0 0 1-.67-1.807a2.589 2.589 0 0 1-.012-.175V12a2 2 0 0 1 2-2H10Zm7-3.5a2.499 2.499 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-4 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Zm2.81 3.048l-4.83 4.83a2.197 2.197 0 0 0-.578 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374a2.194 2.194 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644Z"
      />
    </svg>
  );
}
export default PeopleEdit;