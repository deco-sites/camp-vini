import Image from "apps/website/components/Image.tsx";
import AddToCartButtonVTEX from "../../islands/AddToCartButton/vtex.tsx";
import { Product } from "apps/commerce/types.ts";
import { formatPrice } from "deco-sites/camp-vini/sdk/format.ts";
import { useOffer } from "deco-sites/camp-vini/sdk/useOffer.ts";
// import LikeButtonIsland from "deco-sites/camp-vini/islands/LikeButtonIsland.tsx";

interface HorizontalProductProps {
  product: Product;
  animation?: boolean;
}

export const HorizontalProductCard = (
  { product, animation }: HorizontalProductProps,
) => {
  const { productID, name, url, offers, isVariantOf, image: images } = product;

  const description = product.description || isVariantOf?.description;
  const { listPrice, price, seller } = useOffer(offers);

  const eventParams = {
    items: [{ quantity: 1, item_url: url, item_name: name! }],
  };

  const [image] = images ?? [];

  return (
    <div class="flex gap-2 sm:gap-4 md:gap-8 relative w-full">
      {image.url && (
        <div class="w-40 md:w-48 h-40 md:h-48 flex justify-center items-center overflow-hidden">
          <Image
            alt={name}
            width={175}
            src={image.url}
            loading="lazy"
            height={115}
            class={`duration-300 ${animation ? "hover:scale-110" : ""}`}
          />
        </div>
      )}
      <div class="ml-2 flex flex-col">
        <h2 class="line-clamp-2 md:line-clamp-3">{name}</h2>
        <p class="line-clamp-1 md:line-clamp-3">{description}</p>
        {listPrice && (
          <p class="text-neutral-500 line-through">
            De: {formatPrice(listPrice, offers?.priceCurrency)},
          </p>
        )}
        {price && (
          <p class="text-bold">
            Por: {formatPrice(price, offers?.priceCurrency)},
          </p>
        )}
        {price && (
          <AddToCartButtonVTEX
            eventParams={eventParams}
            productID={productID}
            seller={seller ?? "1"}
          />
        )}
      </div>

      {/* <LikeButtonIsland productID={productID} /> */}
    </div>
  );
};
