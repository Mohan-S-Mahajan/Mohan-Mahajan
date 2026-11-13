import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import confetti from 'canvas-confetti';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/content';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [searchParams] = useSearchParams();
  const prefillProblem = searchParams.get('problem');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  useEffect(() => {
    if (prefillProblem) {
      setValue('message', prefillProblem);
    }
  }, [prefillProblem, setValue]);

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const formspreeKey = import.meta.env.VITE_FORMSPREE_KEY;

    try {
      if (formspreeKey && formspreeKey !== 'demo_endpoint') {
        const response = await fetch(`https://formspree.io/f/${formspreeKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Form submission failed on Formspree');
        }
      } else {
        // Simulated concierge dispatch
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setIsSubmitted(true);
      reset();

      // Trigger elegant soft confetti
      if (!reducedMotion) {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#FFFFFF', '#DF988D', '#9FA8DA'],
        });
      }
    } catch (err: unknown) {
      setSubmitError('Failed to dispatch message. Please reach out directly via phone or email.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-black py-24 sm:py-32 text-white overflow-hidden">
      <div className="w-[90%] mx-auto text-center">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <span className="font-mono text-5xl sm:text-7xl font-light text-zinc-500 select-none">&#123;</span>
            <span className="font-mono text-3xl sm:text-5xl font-light tracking-widest text-white">whsp</span>
            <span className="font-mono text-5xl sm:text-7xl font-light text-zinc-500 select-none">&#125;</span>
          </div>

          <p className="mt-8 font-sans text-base sm:text-lg font-light text-zinc-300 leading-relaxed max-w-md mx-auto whitespace-pre-line">
            Tell us the problem.
            <br />
            No questions. No judgment.
            <br />
            Just put it in &#123; &nbsp;&nbsp;&nbsp;&nbsp; &#125;
          </p>
        </div>

        {/* Concierge Intake Form */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 sm:p-10 backdrop-blur-md shadow-2xl text-left">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle className="h-12 w-12 text-emerald-400 mx-auto animate-bounce" />
              <h3 className="font-sans text-2xl font-bold text-white">Problem Received.</h3>
              <p className="font-sans text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                Saul has received your request. The engineering closers are reviewing the specifications quietly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 rounded-full border border-zinc-700 px-6 py-2 font-mono text-xs uppercase text-zinc-300 transition-all hover:border-white hover:text-white"
              >
                Submit Another Problem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  placeholder="e.g. Walter White / Kim Wexler / Tech Team"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3.5 font-sans text-sm text-white placeholder-zinc-600 focus:border-zinc-500 focus:outline-none transition-colors"
                />
                {errors.name && (
                  <span className="font-mono text-xs text-rose-400 mt-1 block">{errors.name.message}</span>
                )}
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
                  Email or Direct Contact
                </label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  placeholder="you@domain.com"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3.5 font-sans text-sm text-white placeholder-zinc-600 focus:border-zinc-500 focus:outline-none transition-colors"
                />
                {errors.email && (
                  <span className="font-mono text-xs text-rose-400 mt-1 block">{errors.email.message}</span>
                )}
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
                  What is the problem? &#123; Put it here &#125;
                </label>
                <textarea
                  rows={4}
                  {...register('message', { required: 'Please describe the problem' })}
                  placeholder="Explain the technical bug, product need, or architecture challenge..."
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3.5 font-sans text-sm text-white placeholder-zinc-600 focus:border-zinc-500 focus:outline-none transition-colors resize-none"
                />
                {errors.message && (
                  <span className="font-mono text-xs text-rose-400 mt-1 block">{errors.message.message}</span>
                )}
              </div>

              {submitError && (
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-900">
                <div className="font-mono text-xs text-zinc-400 flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-zinc-500" />
                  <span>Direct Hotline:</span>
                  <a href={`tel:${PORTFOLIO_DATA.lawyer.phoneNumeric}`} className="text-white hover:underline">
                    {PORTFOLIO_DATA.lawyer.phone}
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-zinc-200 hover:scale-105 disabled:opacity-50 shadow-md"
                >
                  <span>{isSubmitting ? 'Dispatching...' : 'Put in { } & Solve'}</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Direct Channels Footer Grid */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-zinc-500" />
            <a href={`mailto:${PORTFOLIO_DATA.lawyer.email}`} className="text-zinc-300 hover:text-white transition-colors">
              {PORTFOLIO_DATA.lawyer.email}
            </a>
          </div>
          <span className="text-zinc-700">·</span>
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-zinc-500" />
            <a href={`tel:${PORTFOLIO_DATA.lawyer.phoneNumeric}`} className="text-zinc-300 hover:text-white transition-colors">
              {PORTFOLIO_DATA.lawyer.phone}
            </a>
          </div>
          <span className="text-zinc-700">·</span>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-zinc-500" />
            <span className="text-zinc-400">Pune, Maharashtra, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};
