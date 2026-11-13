import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/content';

export const Process: React.FC = () => {
  return (
    <section id="process" className="relative bg-black py-24 sm:py-32 text-white overflow-hidden">
      <div className="w-[90%] mx-auto text-center">
        {/* Top Header with Cinnabon */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-6 sm:gap-10">
            <span className="font-mono text-5xl sm:text-7xl font-light text-zinc-500 select-none">&#123;</span>
            <span className="font-mono text-3xl sm:text-5xl font-light tracking-widest text-white">whsp</span>
            <span className="font-mono text-5xl sm:text-7xl font-light text-zinc-500 select-none">&#125;</span>
          </div>

          {/* Glowing Cinnabon Icon */}
          <div className="my-6">
            <img
              src="/assets/images/whsp-cinnabon.png"
              alt="Sweet treat roll"
              className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_10px_25px_rgba(255,200,100,0.25)] hover:scale-110 transition-transform"
            />
          </div>

          {/* Microcopy & Downward Brace */}
          <p className="font-sans text-xs sm:text-sm font-light text-zinc-400 max-w-sm leading-relaxed whitespace-pre-line">
            So... how it works?
            <br />
            You just put the problem in &#123; &#125;
            <br />
            We handle the rest.
          </p>

          <div className="my-4 font-mono text-2xl text-zinc-600 font-extralight select-none">&#125;</div>

          <div className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400 mb-12">
            Service Flow
          </div>
        </div>

        {/* 5 Process Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 text-left">
          {PORTFOLIO_DATA.whsp.processCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:border-zinc-500 hover:-translate-y-1.5 shadow-xl"
            >
              <div>
                {/* Step Number */}
                <div className="font-mono text-xs font-semibold text-zinc-400 mb-3">
                  {card.num}
                </div>

                {/* Card Image Frame */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-zinc-900 mb-4 border border-zinc-800/80">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Title */}
                <h3 className="font-sans text-base font-bold text-white tracking-tight mb-1">
                  {card.title}
                </h3>

                {/* Card Subtitle */}
                <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-900 font-mono text-[10px] text-zinc-500 uppercase">
                Phase {idx + 1} // Verified
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reward System Section with Kraft Bag & Curved Indicator */}
        <div className="mt-24 flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 text-zinc-400 font-sans text-sm mb-6">
            <span className="font-medium text-white">{PORTFOLIO_DATA.whsp.rewardText}</span>
            <span className="text-zinc-500">·</span>
            <span className="font-light text-zinc-400">{PORTFOLIO_DATA.whsp.rewardSub}</span>
          </div>

          {/* Kraft Paper Bag Photo */}
          <div className="relative my-4 max-w-xs group">
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-3 shadow-2xl transition-transform duration-500 group-hover:scale-105">
              <img
                src="/assets/images/whsp-reward-bag.png"
                alt="Cinnabon reward bag with whsp stamp"
                className="h-44 sm:h-52 w-auto mx-auto object-contain"
              />
            </div>
          </div>

          <p className="mt-4 font-sans text-xs sm:text-sm font-light italic text-zinc-400">
            "{PORTFOLIO_DATA.whsp.rewardTagline}"
          </p>
        </div>
      </div>
    </section>
  );
};
