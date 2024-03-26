import React, { SVGProps } from "react";

export function BoardGames(props: SVGProps<SVGSVGElement>) {
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
        d="M13.5 3a2 2 0 0 0-1.96 2.4a.5.5 0 0 1-.54.6c-.33 0-.642.08-.916.222a4.006 4.006 0 0 0-.557-.836a2.98 2.98 0 0 1 .974-.345V5a3 3 0 1 1 6 0l-.001.041a3 3 0 1 1-1.138 5.89l.22.907A1.75 1.75 0 0 1 13.88 14h-.762a1.75 1.75 0 0 1-1.7-2.164l.45-1.852a.5.5 0 1 1 .972.236l-.45 1.853a.75.75 0 0 0 .728.927h.762a.75.75 0 0 0 .73-.927l-.45-1.854a.5.5 0 0 1 .757-.537A2 2 0 1 0 15.96 6a.5.5 0 0 1-.5-.6A2 2 0 0 0 13.5 3Zm-9 5a2 2 0 1 1 3.6 1.2a.5.5 0 0 0 .4.8H9a.5.5 0 0 1 0 1H7.893a.5.5 0 0 0-.496.56c.302 2.47 1.609 3.888 2.34 4.5c.175.146.263.33.263.489a.451.451 0 0 1-.451.451H3.45a.451.451 0 0 1-.45-.451c0-.16.088-.343.262-.489c.732-.612 2.04-2.03 2.341-4.5a.5.5 0 0 0-.496-.56H4a.5.5 0 0 1 0-1h.5a.5.5 0 0 0 .4-.8A1.989 1.989 0 0 1 4.5 8Zm2-3a3 3 0 0 0-2.817 4.034A1.5 1.5 0 0 0 4 12h.52c-.372 1.798-1.353 2.836-1.9 3.293c-.346.29-.62.736-.62 1.256C2 17.35 2.65 18 3.451 18H9.55c.8 0 1.45-.65 1.45-1.451c0-.52-.274-.966-.62-1.256c-.547-.457-1.528-1.495-1.9-3.293H9a1.5 1.5 0 0 0 .317-2.966A3 3 0 0 0 6.5 5Z"
      />
    </svg>
  );
}
export default BoardGames;