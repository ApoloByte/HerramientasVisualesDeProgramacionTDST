import { useCounter } from "../hooks/useCounter";
import { useLanguageContext } from "../context/LanguageContext";
import { StyleButton } from "../components/StyleButton";
export const Counter = () => {
  const { count, increaseBy } = useCounter();
  const { t } = useLanguageContext();

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-4xl text-center mt-4">{t("counter")}</h3>
      <div className="font-bold">{" " + count}</div>

      <div className="flex gap-4">
        <StyleButton
          label="+1"
          color="bg-blue-400"
          handleClick={() => increaseBy(+1)}
        />
        <StyleButton
          label="-1"
          color="bg-red-400"
          handleClick={() => increaseBy(-1)}
        />
      </div>
    </div>
  );
};
