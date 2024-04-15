import type { SectionProps } from "deco/types.ts";
import weather, {
  Props as PropsTemp,
} from "apps/weather/loaders/temperature.ts";

interface Props {
  /** @title Localização */
  /** @description Coloque sua latitude e longitude*/
  latitudeAndLongitude: PropsTemp;
}

export const loader = async (props: Props, req: Request) => {
  const { latitudeAndLongitude } = props;
  const temp = await weather(latitudeAndLongitude, req);

  return {
    ...props,
    temp,
  };
};

const SectionTemperature = ({ temp }: SectionProps<typeof loader>) => {
  return (
    <div class="fixed bottom-6 right-2 bg-yellow-600 border-2 border-black rounded-full text-black p-1">
      {temp?.celsius}
    </div>
  );
};

export default SectionTemperature;
