import type { SVGProps } from "react";

export function InkStroke(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.002 2.955a.5.5 0 0 1 .543-.453l3.042.272c2.153.205 4.214.45 5.904.73c1.665.274 3.04.59 3.772.96c.186.094.37.21.507.36a.795.795 0 0 1 .217.686c-.049.267-.229.452-.39.574a2.76 2.76 0 0 1-.637.336c-.986.391-2.888.774-5.923 1.154c-2.147.269-3.44.53-4.106.767a3.647 3.647 0 0 0-.02.007c.087.03.187.063.304.096c.34.096.769.19 1.27.278c1.002.176 2.259.326 3.59.44c1.004.086 2.078.222 2.99.395c.456.086.88.183 1.237.29c.347.103.672.226.904.38c.114.076.25.188.338.349a.687.687 0 0 1 .022.627a.966.966 0 0 1-.364.39a2.51 2.51 0 0 1-.492.236c-.736.271-2.084.53-4.224.774c-2.13.244-3.445.555-4.189.879c-.374.162-.555.307-.634.406c-.06.075-.052.107-.044.137c.017.063.082.18.257.34c.17.155.405.319.696.483c.58.328 1.32.628 2.026.86l2.64.814a.5.5 0 0 1-.296.956l-2.65-.818c-.746-.244-1.554-.569-2.212-.941a4.834 4.834 0 0 1-.88-.616c-.238-.219-.458-.49-.546-.816a1.125 1.125 0 0 1 .227-1.023c.225-.282.577-.508 1.018-.7c.884-.384 2.321-.708 4.473-.954c2.093-.24 3.324-.483 3.95-.704a4.83 4.83 0 0 0-.305-.101a11.805 11.805 0 0 0-1.138-.266a30 30 0 0 0-2.89-.38c-1.347-.116-2.636-.27-3.677-.452c-.52-.092-.986-.192-1.37-.301c-.372-.105-.713-.231-.95-.392a.938.938 0 0 1-.342-.385a.684.684 0 0 1 .044-.642c.1-.163.25-.276.386-.356c.144-.085.318-.161.516-.232c.778-.276 2.17-.549 4.317-.817c3.044-.382 4.826-.753 5.678-1.091c.106-.042.19-.081.257-.116a1.81 1.81 0 0 0-.036-.019c-.574-.29-1.8-.588-3.484-.866c-1.658-.274-3.694-.517-5.834-.72l-3.039-.272a.5.5 0 0 1-.453-.543Z"
      />
    </svg>
  );
}
export default InkStroke;
