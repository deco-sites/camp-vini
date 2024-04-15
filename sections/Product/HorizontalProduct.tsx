import type { Product } from "apps/commerce/types.ts";
import { clx } from "deco-sites/camp-vini/sdk/clx.ts";
import { HorizontalProductCard } from "deco-sites/camp-vini/components/product/HorizonralProduct.tsx";
import { asset } from "$fresh/runtime.ts";

export interface HorizontalProductSectionProps {
  products: Product[] | null;
  animation?: boolean;
  layout:
    | "max-w-xl"
    | "max-w-2xl"
    | "max-w-3xl"
    | "max-w-5xl"
    | "max-w-7xl"
    | "max-w-full";
}

export function loader(props: HorizontalProductSectionProps, _req: Request) {
  return props;
}

const HorizontalProductSection = ({
  products,
  animation,
  layout,
}: HorizontalProductSectionProps) => {
  if (!products?.length) return null;

  return (
    <div
      class={clx(
        " flex items-center justify-center gap-x-4 flex-wrap py-4 w-full bg-gray-400 p-2 sm:p-4 md:p-6 rounded-xl",
        layout,
      )}
    >
      {products.map((product) => (
        <HorizontalProductCard animation={animation} product={product} />
      ))}
    </div>
  );
};

export function LoadingFallback() {
  return (
    <div class="container flex justify-center py-4">
      <div class="flex max-sm:flex-col gap-4">
        <div class="skeleton h-52 w-52 shrink-0"></div>
        <div class="px-2 flex flex-col gap-1 self-stretch shrink-0 w-64">
          <div class="skeleton h-4"></div>
          <div class="skeleton h-4 w-full mb-auto"></div>
          <div class="skeleton h-4 w-14"></div>
          <div class="skeleton h-4 w-18 mb-4"></div>
          <div class="skeleton h-12 w-full"></div>
        </div>
      </div>
    </div>
  );
}

export function ErrorFallback({ error: _error, ...props }: { error?: Error }) {
  console.log(props);
  return (
    <div class="flex flex-col mx-auto max-w-96">
      <img
        src={asset("/image/produto-nordeste.jpg")}
        alt={"produto-nordestino"}
        height={550}
        width={500}
      />
      <p class="font-bold text-center underline">Artesanato nordeste</p>
      <p class="font-light text-center">O melhor da cultura nordestina</p>
      <a href="/culturas" class="btn btn-block  text-white">
        Você confere apenas aqui
      </a>
    </div>
  );
}

export default HorizontalProductSection;
