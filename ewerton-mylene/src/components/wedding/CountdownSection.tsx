import { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2026-08-08T15:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: "Dias" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FCEFE3] text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-[#3A4A40] text-xl md:text-2xl italic mb-12 opacity-90">
          Falta pouco para o nosso "sim"
        </p>

        <div className="flex justify-center items-center gap-4 md:gap-8">
          {timeBlocks.map((block, index) => (
            <div key={block.label} className="flex items-center gap-4 md:gap-8">
              <Reveal variant="zoom-in" delay={index * 0.1} className="flex flex-col items-center">
                <div className="countdown-digit bg-[#CACDB6] w-16 h-16 md:w-24 md:h-24 flex items-center justify-center text-2xl md:text-4xl font-display mb-2">
                  {String(block.value).padStart(2, "0")}
                </div>
                <span className="font-body text-xs uppercase tracking-wider opacity-70 text-[#3A4A40]">
                  {block.label}
                </span>
              </Reveal>
              {index < timeBlocks.length - 1 && (
                <span className="text-2xl md:text-4xl font-light text-neon-blue opacity-50 -mt-6">
                  :
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
