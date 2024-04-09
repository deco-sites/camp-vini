export interface Props {
  /** @title Código do cupom */
  cod?: string;
  /** @title Descrição do cupom */
  desc?: string;
}

export default function Cupom({ cod, desc }: Props) {
  return (
    <>
      <div class="flex flex-col gap-8 justify-center items-center m-auto text-6xl text-center h-[100vh]">
        <p class="font-bold">
          Seu cupom é: <span class="underline">{cod}</span>
        </p>
        <p class="border border-black max-w-[30%] text-2xl rounded-md p-5 font-semibold">
          Descrição: <span class="font-normal">{desc}</span>
        </p>
      </div>
    </>
  );
}
